//헤더 영역 컴포넌트

import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import type { Todo } from "../types/types";

interface TodoHeaderProps {
  todos: Todo[];
  onAddModal: () => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({
  todos,
  onAddModal,
  sortBy,
  onSortChange,
}) => {

  // 우선순위별 통계 계산
  const getPriorityStats = (todos: Todo[]) => {
    const stats = {
      HIGH: { total: 0, completed: 0 },
      MEDIUM: { total: 0, completed: 0 },
      LOW: { total: 0, completed: 0 },
    };

    todos.forEach((todo) => {
      stats[todo.priority].total++;
      if (todo.completed) {
        stats[todo.priority].completed++;
      }
    });

    return stats;
  };

  const priorityStats = getPriorityStats(todos);
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <Paper
      elevation={0}
      sx={{ p: 2.5, bgcolor: "grey.50", borderRadius: "12px 12px 0 0" }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h2" component="h1" sx={{ mb: 1 }}>
          ModernTodo
        </Typography>

        {/* 할 일 추가 버튼 */}
        <Button
          variant="contained"
          onClick={onAddModal}
          size="large"
          sx={{
            minWidth: 60,
            height: 60,
            borderRadius: "50%",
            p: 0,
          }}
        >
          <AddIcon sx={{ fontSize: 28 }} />
        </Button>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 2, mb: 0 }}
      >

        {/* 진행률 통계 */}
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            전체 {completedCount}/{todos.length}
          </Typography>
          <Box display="flex" gap={2} sx={{ flexWrap: "wrap" }}>
            <Typography variant="caption" color="error">
              높음: {priorityStats.HIGH.completed}/{priorityStats.HIGH.total}
            </Typography>
            <Typography variant="caption" color="warning.main">
              보통: {priorityStats.MEDIUM.completed}/
              {priorityStats.MEDIUM.total}
            </Typography>
            <Typography variant="caption" color="success.main">
              낮음: {priorityStats.LOW.completed}/{priorityStats.LOW.total}
            </Typography>
          </Box>
        </Box>

        {/* 정렬 기준 선택 */}
        <Box display="flex" justifyContent="flex-end">
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel sx={{ fontSize: "13px" }}>정렬 기준</InputLabel>
            <Select
              value={sortBy}
              label="정렬 기준"
              onChange={(e) => onSortChange(e.target.value)}
              sx={{ fontSize: "13px" }}
            >
              <MenuItem value="createdAt" sx={{ fontSize: "13px" }}>
                등록순
              </MenuItem>
              <MenuItem value="priority" sx={{ fontSize: "13px" }}>
                우선순위순
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Paper>
  );
};

export default TodoHeader;
