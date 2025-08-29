// 데이터 패치 및 처리 훅

import { useState } from "react";
import type { Todo } from "../types/types";

export const useFetch = () => {
  const [data, setData] = useState<Todo[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const fetchData = async (url: string, options: RequestInit = {}) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const response = await fetch(url, options);
      if (!response.ok) throw new Error("요청 실패");

      const result = await response.json();
      setData(result);
      setSuccess("성공");
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : "오류 발생";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    success,
    setSuccess,
    setError,
    setData,
    fetchData,
  };
};
