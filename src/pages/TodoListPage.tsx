// 메인 페이지

import React, { useEffect } from "react";
import { Paper, Box } from "@mui/material";
import TodoList from "../components/TodoList";
import TodoHeader from "../components/TodoHeader";
import AddTodo from "../components/AddTodo";
import Notification from "../components/Notification";
import { useApi } from "../hooks/useApi";
import { useTodoReducer } from "../hooks/useTodoReducer";
import type {
  Todo,
  CreateTodoRequest,
  UpdateTodoRequest,
} from "../types/types";

const TodoListPage: React.FC = () => {
  const {
    todos: apiTodos,
    loading,
    error,
    success,
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
    setSuccess,
    setError,
  } = useApi();

  const { todos, sortedTodos, sortBy, showAddModal, dispatch } =
    useTodoReducer();

  // 초기 데이터 로드
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        await getTodos();
      } catch (err) {
        console.error("Error loading data:", err);
      }
    };
    loadInitialData();
  }, []);

  // API 데이터가 변경되면 로컬 상태 업데이트
  useEffect(() => {
    if (apiTodos) {
      dispatch({ type: "SET_TODOS", payload: apiTodos });
    }
  }, [apiTodos, dispatch]);

  // 할 일 추가
  const handleAddTodo = async (todoData: CreateTodoRequest) => {
    try {
      const newTodo = await createTodo(todoData);
      dispatch({ type: "ADD_TODO", payload: newTodo });
      dispatch({ type: "SET_SHOW_ADD_MODAL", payload: false });
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  // 할 일 수정
  const handleUpdateTodo = async (id: number, updates: UpdateTodoRequest) => {
    try {
      const updatedTodo = await updateTodo(id, updates);
      dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  // 할 일 삭제
  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      dispatch({ type: "DELETE_TODO", payload: id });
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  // 완료 상태 토글
  const handleCompleteToggle = async (id: number) => {
    try {
      const updatedTodo = await toggleComplete(id);
      dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
    } catch (err) {
      console.error("Error toggling todo:", err);
    }
  };

  // 드래그 앤 드롭
  const handleDropped = (newTodos: Todo[]) => {
    dispatch({ type: "SET_TODOS", payload: newTodos });
    dispatch({ type: "SET_CUSTOM_ORDER", payload: true });
  };

  return (
    <Paper>
      <Box>
        {/*헤더*/}
        <TodoHeader
          todos={todos}
          onAddModal={() =>
            dispatch({ type: "SET_SHOW_ADD_MODAL", payload: true })
          }
          sortBy={sortBy}
          onSortChange={(newSortBy) =>
            dispatch({ type: "SET_SORT_BY", payload: newSortBy })
          }
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
        onClose={() => dispatch({ type: "SET_SHOW_ADD_MODAL", payload: false })}
        onSubmit={handleAddTodo}
      />
    </Paper>
  );
};

export default TodoListPage;