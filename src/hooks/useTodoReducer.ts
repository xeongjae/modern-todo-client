// 할 일 목록 관리 훅

import { useReducer, useMemo } from "react";
import type { Todo } from "../types/types";

type TodoAction =
  | { type: "SET_TODOS"; payload: Todo[] }
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "UPDATE_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "SET_SORT_BY"; payload: string }
  | { type: "SET_CUSTOM_ORDER"; payload: boolean }
  | { type: "SET_SHOW_ADD_MODAL"; payload: boolean };

interface TodoState {
  todos: Todo[];
  sortBy: string;
  hasCustomOrder: boolean;
  showAddModal: boolean;
}

const initialState: TodoState = {
  todos: [],
  sortBy: "createdAt",
  hasCustomOrder: false,
  showAddModal: false,
};

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, todos: action.payload };
    case "ADD_TODO":
      return { ...state, todos: [action.payload, ...state.todos] };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
        hasCustomOrder:
          action.payload !== "createdAt" ? false : state.hasCustomOrder,
      };
    case "SET_CUSTOM_ORDER":
      return { ...state, hasCustomOrder: action.payload };
    case "SET_SHOW_ADD_MODAL":
      return { ...state, showAddModal: action.payload };
    default:
      return state;
  }
};

export const useTodoReducer = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todos, sortBy, hasCustomOrder, showAddModal } = state;

  const sortedTodos = useMemo(() => {
    if (hasCustomOrder) return todos;

    if (sortBy === "priority") {
      return [...todos].sort((a, b) => {
        const priority = { HIGH: 3, MEDIUM: 2, LOW: 1 };
        const priorityDiff = priority[b.priority] - priority[a.priority];
        if (priorityDiff !== 0) return priorityDiff;
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
    } else {
      return [...todos].sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    }
  }, [todos, sortBy, hasCustomOrder]);

  return {
    todos,
    sortedTodos,
    sortBy,
    hasCustomOrder,
    showAddModal,
    dispatch,
  };
};
