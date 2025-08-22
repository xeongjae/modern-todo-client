// 할 일 추가 모달

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import type { CreateTodoRequest } from "../types/types";
import { Priority } from "../types/types";

interface AddTodoProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (todoData: CreateTodoRequest) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ open, onClose, onSubmit }) => {
  const [newTodoData, setNewTodoData] = useState({
    title: "",
    description: "",
    priority: Priority.MEDIUM,
  });

  // 할 일 추가
  const handleSubmit = () => {
    if (newTodoData.title.trim()) {
      onSubmit(newTodoData);
      setNewTodoData({
        title: "",
        description: "",
        priority: Priority.MEDIUM,
      });
      onClose();
    }
  };

  // 취소 시 초기화
  const handleClose = () => {
    setNewTodoData({
      title: "",
      description: "",
      priority: Priority.MEDIUM,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>할 일 추가</DialogTitle>
      <DialogContent>
        {/* 제목 */}
        <TextField
          fullWidth
          label="제목"
          value={newTodoData.title}
          onChange={(e) =>
            setNewTodoData({ ...newTodoData, title: e.target.value })
          }
          required
          variant="outlined"
          sx={{ mt: 2, mb: 2 }}
        />

        {/* 상세 설명 */}
        <TextField
          fullWidth
          label="상세 설명"
          value={newTodoData.description}
          onChange={(e) =>
            setNewTodoData({ ...newTodoData, description: e.target.value })
          }
          multiline
          rows={3}
          variant="outlined"
          sx={{ mb: 2 }}
        />

        {/* 우선순위 */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1 }}
            gutterBottom
          >
            우선순위 선택
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {/* 높음 버튼 */}
            <Button
              variant={
                newTodoData.priority === "HIGH" ? "contained" : "outlined"
              }
              size="small"
              onClick={() =>
                setNewTodoData({ ...newTodoData, priority: Priority.HIGH })
              }
              sx={{
                minWidth: 80,
                bgcolor:
                  newTodoData.priority === "HIGH"
                    ? "error.main"
                    : "transparent",
                color: newTodoData.priority === "HIGH" ? "white" : "grey.600",
                borderColor: "grey.400",
                "&:hover": {
                  bgcolor:
                    newTodoData.priority === "HIGH"
                      ? "error.dark"
                      : "error.light",
                  color: "white",
                },
              }}
            >
              🔴 높음
            </Button>

            {/* 보통 버튼 */}
            <Button
              variant={
                newTodoData.priority === "MEDIUM" ? "contained" : "outlined"
              }
              size="small"
              onClick={() =>
                setNewTodoData({ ...newTodoData, priority: Priority.MEDIUM })
              }
              sx={{
                minWidth: 80,
                bgcolor:
                  newTodoData.priority === "MEDIUM"
                    ? "warning.main"
                    : "transparent",
                color: newTodoData.priority === "MEDIUM" ? "white" : "grey.600",
                borderColor: "grey.400",
                "&:hover": {
                  bgcolor:
                    newTodoData.priority === "MEDIUM"
                      ? "warning.dark"
                      : "warning.light",
                  color: "white",
                },
              }}
            >
              🟡 보통
            </Button>

            {/* 낮음 버튼 */}
            <Button
              variant={
                newTodoData.priority === "LOW" ? "contained" : "outlined"
              }
              size="small"
              onClick={() =>
                setNewTodoData({ ...newTodoData, priority: Priority.LOW })
              }
              sx={{
                minWidth: 80,
                bgcolor:
                  newTodoData.priority === "LOW"
                    ? "success.main"
                    : "transparent",
                color: newTodoData.priority === "LOW" ? "white" : "grey.600",
                borderColor: "grey.400",
                "&:hover": {
                  bgcolor:
                    newTodoData.priority === "LOW"
                      ? "success.dark"
                      : "success.light",
                  color: "white",
                },
              }}
            >
              🟢 낮음
            </Button>
          </Box>
        </Box>
      </DialogContent>

      {/* (취소, 추가) 버튼 */}
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button onClick={handleSubmit} variant="contained">
          추가
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTodo;
