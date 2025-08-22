// 재사용 가능한 타입 모음

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  dueDate?: string;
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

export enum Priority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

export enum ConnectionStatus {
  ONLINE = "online",
  OFFLINE = "offline",
}