import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import { theme } from "./styles/theme";
import TodoListPage from "./pages/TodoListPage";
import Notification from "./components/Notification";
import { ConnectionStatus } from "./types/types";
import "./styles/globalStyle.scss";

function App() {
  const [connectionStatus, setConnectionStatus] =
    useState<ConnectionStatus | null>(null);

  // 백엔드 서버 연결 상태 확인
  useEffect(() => {
    const checkServerConnection = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/todos", {
          method: "GET",
        });

        if (response.ok) {
          setConnectionStatus(ConnectionStatus.ONLINE);
        } else {
          setConnectionStatus(ConnectionStatus.OFFLINE);
        }
      } catch {
        setConnectionStatus(ConnectionStatus.OFFLINE);
        console.log(
          "백엔드 서버에 연결할 수 없습니다."
        );
      }
    };

    const timer = setTimeout(checkServerConnection, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ pt: 20, pb: 30 }}>
        {/* 
         모든 알림을 관리
          - 서버 연결 상태 알림
          - 에러 알림
          - 성공 알림
        */}
        <Notification
          error={null}
          success={null}
          connectionStatus={connectionStatus}
          onCloseError={() => {}}
          onCloseSuccess={() => {}}
          onCloseConnectionStatus={() => setConnectionStatus(null)}
        />

        {/* 
          모든 할 일 관련 로직과 UI
        */}
        <TodoListPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
