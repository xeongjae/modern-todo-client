// 타입 정의

export enum Priority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTodoRequest {
  title: string;
  description: string;
  priority: Priority;
}

export interface UpdateTodoRequest {
  title?: string;
  description?: string;
  priority?: Priority;
  completed?: boolean;
}

export enum ConnectionStatus {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
}

export interface NotificationProps {
  error: string | null;
  success: string | null;
  connectionStatus: ConnectionStatus | null;
  onCloseError: () => void;
  onCloseSuccess: () => void;
  onCloseConnectionStatus: () => void;
}
