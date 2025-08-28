// 할 일 목록 컴포넌트

import React, { useState } from "react";
import { Box, Typography, List, CircularProgress } from "@mui/material";
import type { Todo } from "../types/types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onUpdate: (id: number, updates: Partial<Todo>) => void;
  onDelete: (id: number) => void;
  onCompleteToggle: (id: number) => void;
  onDropped: (newTodos: Todo[]) => void;
  loading: boolean;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onUpdate,
  onDelete,
  onCompleteToggle,
  onDropped,
  loading,
}) => {
  const [draggedId, setDraggedId] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, id: number) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetId: number) => {
    e.preventDefault();

    if (!draggedId || draggedId === targetId) return;

    const draggedIndex = todos.findIndex((todo) => todo.id === draggedId);
    const targetIndex = todos.findIndex((todo) => todo.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const newTodos = [...todos];
    const [draggedTodo] = newTodos.splice(draggedIndex, 1);
    newTodos.splice(targetIndex, 0, draggedTodo);

    onDropped(newTodos);
  };

  const handleDragEnd = () => {
    setDraggedId(null);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {todos.length === 0 ? (
        <Box textAlign="center" py={4}>
          <Typography variant="body1" color="text.secondary">
            📝 할 일을 추가해보세요!
          </Typography>
        </Box>
      ) : (
        <List sx={{ bgcolor: "background.paper", py: 0 }}>
          {todos.map((todo) => (
            <Box
              key={todo.id}
             draggable
              onDragStart={(e) => handleDragStart(e, todo.id)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, todo.id)}
              onDragEnd={handleDragEnd}
              sx={{
                cursor: "grab",
                opacity: draggedId === todo.id ? 0.3 : 1,
                "&:active": { cursor: "grabbing" },
                userSelect: "none",
              }}
            >
              <TodoItem
                todo={todo}
                onUpdate={onUpdate}
                onDelete={onDelete}
                onCompleteToggle={onCompleteToggle}
              />
            </Box>
          ))}
        </List>
      )}
    </Box>
  );
};

export default TodoList;
