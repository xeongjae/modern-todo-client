import { useState, useEffect } from "react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import "./styles/globalStyle.scss";
import TodoListPage from "./pages/TodoListPage";
import Notification from "./components/Notification";
import { ConnectionStatus } from "./types/types";

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
        console.log("백엔드 서버에 연결할 수 없습니다.");
      }
    };

    const timer = setTimeout(checkServerConnection, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ pt: 20, pb: 30 }}>
        <TodoListPage />
        <Notification
          error={null}
          success={null}
          connectionStatus={connectionStatus}
          onCloseError={() => {}}
          onCloseSuccess={() => {}}
          onCloseConnectionStatus={() => setConnectionStatus(null)}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
