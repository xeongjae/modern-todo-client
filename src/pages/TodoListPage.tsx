// 메인 페이지

import React, { useState, useEffect } from "react";
import { Paper, Box } from "@mui/material";
import type {
  Todo,
  CreateTodoRequest,
  UpdateTodoRequest,
} from "../types/types";
import { todoApi } from "../utils/api";
import TodoList from "../components/TodoList";
import TodoHeader from "../components/TodoHeader";
import AddTodo from "../components/AddTodo";
import Notification from "../components/Notification";

const TodoListPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("createdAt");
  const [showAddModal, setShowAddModal] = useState(false);

  // 초기 데이터 로드
  useEffect(() => {
    loadInitialData();
  }, []);

  // 초기 데이터 로드
  const loadInitialData = async () => {
    try {
      setLoading(true);
      setError(null);

      const todosData = await todoApi.getTodos();
      setTodos(todosData);
    } catch (err) {
      console.error("Error loading data:", err);
      setError("서버 응답이 지연되고 있습니다.");
      setTodos([]);
    } finally {
      setLoading(false);
    }
  };

  // 할 일 추가
  const handleAddTodo = async (todoData: CreateTodoRequest) => {
    try {
      const newTodo = await todoApi.createTodo(todoData);
      setTodos((prev) => [newTodo, ...prev]);
      setSuccess("추가되었습니다!");
      setError(null);
    } catch (err) {
      setError("추가할 수 없습니다. 다시 시도해주세요.");
      console.error("Error adding todo:", err);
    }
  };

  // 할 일 수정
  const handleUpdateTodo = async (id: number, updates: UpdateTodoRequest) => {
    try {
      const updatedTodo = await todoApi.updateTodo(id, updates);
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
      setSuccess("수정되었습니다!");
      setError(null);
    } catch (err) {
      setError("수정할 수 없습니다. 다시 시도해주세요.");
      console.error("Error updating todo:", err);
    }
  };

  // 할 일 삭제
  const handleDeleteTodo = async (id: number) => {
    try {
      await todoApi.deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      setSuccess("삭제되었습니다.");
      setError(null);
    } catch (err) {
      setError("삭제할 수 없습니다. 다시 시도해주세요.");
      console.error("Error deleting todo:", err);
    }
  };

  // 완료 상태 토글
  const handleCompleteToggle = async (id: number) => {
    try {
      const updatedTodo = await todoApi.toggleComplete(id);
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? updatedTodo : todo))
      );

      if (updatedTodo.completed) {
        setSuccess("완료했습니다!");
      } else {
        setSuccess("미완료로 변경했습니다.");
      }
      setError(null);
    } catch (err) {
      setError("상태를 변경할 수 없습니다. 다시 시도해주세요.");
      console.error("Error toggling todo:", err);
    }
  };

  // 드래그 앤 드롭
  const handleDropped = (newTodos: Todo[]) => {
    setTodos(newTodos);
    setHasCustomOrder(true);
  };

  const [sortedTodos, setSortedTodos] = useState<Todo[]>([]);
  const [hasCustomOrder, setHasCustomOrder] = useState(false);

  // (드래그 앤 드롭, 정렬 기준) 조합으로 리스트 정렬
  useEffect(() => {
    let newSortedTodos: Todo[];

    if (hasCustomOrder) {
      newSortedTodos = todos;
    } else {
      if (sortBy === "priority") {
        newSortedTodos = [...todos].sort((a, b) => {
          const priority = { HIGH: 3, MEDIUM: 2, LOW: 1 };
          const priorityDiff = priority[b.priority] - priority[a.priority];

          if (priorityDiff !== 0) return priorityDiff;

          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        });
      } else {
        newSortedTodos = [...todos].sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }
    }

    setSortedTodos(newSortedTodos);
  }, [todos, sortBy, hasCustomOrder]);

  // 정렬 기준 변경 시 드래그 된 순서 다시 초기화
  useEffect(() => {
    if (sortBy !== "createdAt") {
      setHasCustomOrder(false);
    }
  }, [sortBy]);

  return (
    <Paper>
      <Box>
        {/*헤더*/}
        <TodoHeader
          todos={todos}
          onAddModal={() => setShowAddModal(true)}
          sortBy={sortBy}
          onSortChange={(newSortBy) => setSortBy(newSortBy)}
        />
        {/*리스트*/}
        <TodoList
          todos={sortedTodos}
          onUpdate={handleUpdateTodo}
          onDelete={handleDeleteTodo}
          onCompleteToggle={handleCompleteToggle}
          onDropped={handleDropped}
          loading={loading}
        />
      </Box>

      {/*알림 시스템*/}
      <Notification
        success={success}
        error={error}
        connectionStatus={null}
        onCloseSuccess={() => setSuccess(null)}
        onCloseError={() => setError(null)}
        onCloseConnectionStatus={() => {}}
      />

      {/* 할 일 추가*/}
      <AddTodo
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddTodo}
      />
    </Paper>
  );
};

export default TodoListPage;
