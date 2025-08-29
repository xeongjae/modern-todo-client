// 모든 API 호출을 관리하는 훅

import { useFetch } from "./useFetch";
import type { CreateTodoRequest, UpdateTodoRequest } from "../types/types";
import { todoApi } from "../utils/api";

export const useApi = () => {
  const {
    data: todos,
    loading,
    error,
    success,
    setSuccess,
    setError,
    setData,
  } = useFetch();

  const getTodos = async () => {
    try {
      const todosData = await todoApi.getTodos();
      setData(todosData);
      return todosData;
    } catch (err) {
      setError("데이터를 불러올 수 없습니다");
      throw err;
    }
  };

  const createTodo = async (todoData: CreateTodoRequest) => {
    try {
      const newTodo = await todoApi.createTodo(todoData);
      setSuccess("추가되었습니다");
      return newTodo;
    } catch (err) {
      setError("추가할 수 없습니다");
      throw err;
    }
  };

  const updateTodo = async (id: number, updates: UpdateTodoRequest) => {
    try {
      const updatedTodo = await todoApi.updateTodo(id, updates);
      setSuccess("수정되었습니다");
      return updatedTodo;
    } catch (err) {
      setError("수정할 수 없습니다");
      throw err;
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await todoApi.deleteTodo(id);
      setSuccess("삭제되었습니다");
    } catch (err) {
      setError("삭제할 수 없습니다");
      throw err;
    }
  };

  const toggleComplete = async (id: number) => {
    try {
      const updatedTodo = await todoApi.toggleComplete(id);
      setSuccess(
        updatedTodo.completed ? "완료했습니다" : "미완료로 변경했습니다"
      );
      return updatedTodo;
    } catch (err) {
      setError("상태를 변경할 수 없습니다");
      throw err;
    }
  };

  return {
    todos,
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
  };
};
