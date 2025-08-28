//API 모듈 - 서버와의 모든 HTTP 통신 정리

import type {
  Todo,
  CreateTodoRequest,
  UpdateTodoRequest,
} from "../types/types";

const API_BASE_URL = "/api";

export const todoApi = {
  async getTodos(): Promise<Todo[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/todos`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      let message = "요청을 처리할 수 없습니다. 다시 시도해주세요.";

      if (error instanceof Error) {
        if (error.message.includes("HTTP error")) {
          const status = parseInt(error.message.match(/\d+/)?.[0] || "500");
          switch (status) {
            case 400:
              message = "잘못된 요청입니다. 입력 정보를 확인해주세요.";
              break;
            case 401:
              message = "인증이 필요합니다. 로그인 후 다시 시도해주세요.";
              break;
            case 403:
              message = "접근 권한이 없습니다.";
              break;
            case 404:
              message = "요청한 리소스를 찾을 수 없습니다.";
              break;
            case 500:
              message = "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
              break;
            default:
              message = `서버 오류가 발생했습니다. (${status})`;
          }
        } else if (error.message.includes("fetch")) {
          message = "서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요.";
        }
      }

      throw new Error(message);
    }
  },

  async createTodo(todoData: CreateTodoRequest): Promise<Todo> {
    try {
      const response = await fetch(`${API_BASE_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      let message = "요청을 처리할 수 없습니다. 다시 시도해주세요.";

      if (error instanceof Error) {
        if (error.message.includes("HTTP error")) {
          const status = parseInt(error.message.match(/\d+/)?.[0] || "500");
          switch (status) {
            case 400:
              message = "잘못된 요청입니다. 입력 정보를 확인해주세요.";
              break;
            case 401:
              message = "인증이 필요합니다. 로그인 후 다시 시도해주세요.";
              break;
            case 403:
              message = "접근 권한이 없습니다.";
              break;
            case 404:
              message = "요청한 리소스를 찾을 수 없습니다.";
              break;
            case 500:
              message = "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
              break;
            default:
              message = `서버 오류가 발생했습니다. (${status})`;
          }
        } else if (error.message.includes("fetch")) {
          message = "서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요.";
        }
      }

      throw new Error(message);
    }
  },

  async updateTodo(id: number, updates: UpdateTodoRequest): Promise<Todo> {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      let message = "요청을 처리할 수 없습니다. 다시 시도해주세요.";

      if (error instanceof Error) {
        if (error.message.includes("HTTP error")) {
          const status = parseInt(error.message.match(/\d+/)?.[0] || "500");
          switch (status) {
            case 400:
              message = "잘못된 요청입니다. 입력 정보를 확인해주세요.";
              break;
            case 401:
              message = "인증이 필요합니다. 로그인 후 다시 시도해주세요.";
              break;
            case 403:
              message = "접근 권한이 없습니다.";
              break;
            case 404:
              message = "요청한 리소스를 찾을 수 없습니다.";
              break;
            case 500:
              message = "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
              break;
            default:
              message = `서버 오류가 발생했습니다. (${status})`;
          }
        } else if (error.message.includes("fetch")) {
          message = "서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요.";
        }
      }

      throw new Error(message);
    }
  },

  async deleteTodo(id: number): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      let message = "요청을 처리할 수 없습니다. 다시 시도해주세요.";

      if (error instanceof Error) {
        if (error.message.includes("HTTP error")) {
          const status = parseInt(error.message.match(/\d+/)?.[0] || "500");
          switch (status) {
            case 400:
              message = "잘못된 요청입니다. 입력 정보를 확인해주세요.";
              break;
            case 401:
              message = "인증이 필요합니다. 로그인 후 다시 시도해주세요.";
              break;
            case 403:
              message = "접근 권한이 없습니다.";
              break;
            case 404:
              message = "요청한 리소스를 찾을 수 없습니다.";
              break;
            case 500:
              message = "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
              break;
            default:
              message = `서버 오류가 발생했습니다. (${status})`;
          }
        } else if (error.message.includes("fetch")) {
          message = "서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요.";
        }
      }

      throw new Error(message);
    }
  },

  async toggleComplete(id: number): Promise<Todo> {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}/toggle`, {
        method: "PATCH",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      let message = "요청을 처리할 수 없습니다. 다시 시도해주세요.";

      if (error instanceof Error) {
        if (error.message.includes("HTTP error")) {
          const status = parseInt(error.message.match(/\d+/)?.[0] || "500");
          switch (status) {
            case 400:
              message = "잘못된 요청입니다. 입력 정보를 확인해주세요.";
              break;
            case 401:
              message = "인증이 필요합니다. 로그인 후 다시 시도해주세요.";
              break;
            case 403:
              message = "접근 권한이 없습니다.";
              break;
            case 404:
              message = "요청한 리소스를 찾을 수 없습니다.";
              break;
            case 500:
              message = "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
              break;
            default:
              message = `서버 오류가 발생했습니다. (${status})`;
          }
        } else if (error.message.includes("fetch")) {
          message = "서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요.";
        }
      }

      throw new Error(message);
    }
  },
};
