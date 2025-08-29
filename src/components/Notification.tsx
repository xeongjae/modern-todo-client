// 전체의 알림을 담당하는 컴포넌트

import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { type NotificationProps, ConnectionStatus } from "../types/types";

const Notification: React.FC<NotificationProps> = ({
  success,
  onCloseSuccess,
  error,
  onCloseError,
  connectionStatus,
  onCloseConnectionStatus,
}) => {
  return (
    <>
      {/* 에러 알림 */}
      <Snackbar
        open={!!error}
        autoHideDuration={4000}
        onClose={onCloseError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={onCloseError} severity="error">
          {error}
        </Alert>
      </Snackbar>

      {/* 성공 알림 */}
      <Snackbar
        open={!!success}
        autoHideDuration={4000}
        onClose={onCloseSuccess}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={onCloseSuccess} severity="success">
          {success}
        </Alert>
      </Snackbar>

      {/* 서버 연결 실패 알림 */}
      <Snackbar
        open={connectionStatus === ConnectionStatus.OFFLINE}
        autoHideDuration={null}
        onClose={onCloseConnectionStatus}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={onCloseConnectionStatus}
          severity="info"
          sx={{ width: "100%" }}
        >
          서버 상태를 확인해주세요.
        </Alert>
      </Snackbar>

      {/* 서버 연결 성공 알림 */}
      <Snackbar
        open={connectionStatus === ConnectionStatus.ONLINE}
        autoHideDuration={1000}
        onClose={onCloseConnectionStatus}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={onCloseConnectionStatus}
          severity="success"
          sx={{ width: "100%" }}
        >
          서버와 정상적으로 연결되었습니다.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Notification;
