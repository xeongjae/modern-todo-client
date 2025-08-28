// 개별 할 일을 표시하고 관리하는 컴포넌트

import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import type { Todo } from "../types/types";

interface TodoItemProps {
  todo: Todo;
  onUpdate: (id: number, updates: Partial<Todo>) => void;
  onDelete: (id: number) => void;
  onCompleteToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onUpdate,
  onDelete,
  onCompleteToggle,
}) => {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(
    todo.description || ""
  );
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  // 수정 저장
  const handleSaveEdit = () => {
    onUpdate(todo.id, {
      title: editTitle,
      description: editDescription,
    });
    setEditing(false);
  };

  // 수정 취소
  const handleCancelEdit = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description || "");
    setEditing(false);
  };

  return (
    <>
      <ListItem
        sx={{
          bgcolor: todo.completed
            ? "action.hover"
            : todo.priority === "HIGH"
            ? "rgba(244, 67, 54, 0.05)"
            : todo.priority === "MEDIUM"
            ? "rgba(255, 152, 0, 0.05)"
            : "rgba(76, 175, 80, 0.05)",
          opacity: todo.completed ? 0.7 : 1,
          transition: "all 0.3s ease",
          py: 1,
          "&:hover": {
            bgcolor: todo.completed
              ? "action.hover"
              : todo.priority === "HIGH"
              ? "rgba(244, 67, 54, 0.1)"
              : todo.priority === "MEDIUM"
              ? "rgba(255, 152, 0, 0.1)"
              : "rgba(76, 175, 80, 0.1)",
          },
          borderLeft: `4px solid ${
            todo.priority === "HIGH"
              ? "#f44336"
              : todo.priority === "MEDIUM"
              ? "#ff9800"
              : "#4caf50"
          }`,
        }}
      >
        <Checkbox
          checked={todo.completed}
          onChange={() => onCompleteToggle(todo.id)}
          color="primary"
          sx={{ mr: 1 }}
        />
        {/* 할 일 내용 */}
        <ListItemText
          sx={{ pl: 2, pr: 2 }}
          primary={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {editing ? (
                <TextField
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  size="small"
                  fullWidth
                  variant="outlined"
                  sx={{ minWidth: 200 }}
                />
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    fontWeight: todo.completed ? "normal" : "medium",
                    fontSize: "18px",
                  }}
                >
                  {todo.title}
                </Typography>
              )}
            </Box>
          }
          secondary={
            editing ? (
              <TextField
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                size="small"
                fullWidth
                multiline
                rows={2}
                placeholder="설명을 입력하세요..."
                sx={{ mt: 1 }}
              />
            ) : (
              todo.description && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.2 }}
                >
                  {todo.description}
                </Typography>
              )
            )
          }
        />
        {/* 저장, 취소 버튼 */}
        <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
          {editing ? (
            <>
              <Button size="small" onClick={handleSaveEdit} color="primary">
                저장
              </Button>
              <Button size="small" onClick={handleCancelEdit}>
                취소
              </Button>
            </>
          ) : (
            <>
              <IconButton
                size="small"
                onClick={(e) => setMenuAnchor(e.currentTarget)}
              >
                <MoreVertIcon />
              </IconButton>
            </>
          )}
        </Box>
      </ListItem>
      <Divider />
      {/* 더보기(수정, 삭제) 버튼 */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
      >
        <MenuItem
          onClick={() => {
            setEditing(true);
            setMenuAnchor(null);
          }}
        >
          <EditIcon sx={{ mr: 1 }} fontSize="small" />
          수정
        </MenuItem>

        <MenuItem
          onClick={() => {
            onDelete(todo.id);
            setMenuAnchor(null);
          }}
        >
          <DeleteIcon sx={{ mr: 1 }} fontSize="small" />
          삭제
        </MenuItem>
      </Menu>
    </>
  );
};

export default TodoItem;
