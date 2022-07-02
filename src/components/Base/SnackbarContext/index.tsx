import { Alert, AlertColor, Snackbar } from "@mui/material";
import React, { createContext, PropsWithChildren, useState } from "react";

interface SnackbarContextProps {
  setAlert: React.Dispatch<React.SetStateAction<AlertProps>>;
}

interface AlertProps {
  show: boolean;
  severity?: AlertColor | undefined;
  message?: string;
}

export const SnackbarContext = createContext<SnackbarContextProps>(
  {} as SnackbarContextProps
);

export const SnackbarProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    severity: "info",
    message: "",
  });

  const handleClose = () =>
    setAlert({
      show: false,
    });

  return (
    <SnackbarContext.Provider value={{ setAlert }}>
      {children}
      <Snackbar open={alert.show} autoHideDuration={4000} onClose={handleClose}>
        <Alert elevation={6} variant="filled" severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
