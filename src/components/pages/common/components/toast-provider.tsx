
import { Alert, AlertColor, Snackbar, Typography } from '@mui/material';
import { createContext, useContext, useState } from 'react';
import { ReactNode } from 'react';

interface ToastContextType {
  (message: string, title: string, severity?: AlertColor): void;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<{ open: boolean; message: string; title: string, severity: AlertColor }>({ open: false, message: '', title: '', severity: 'success' });

  const showToast = (message: string, title: string, severity: AlertColor = 'success') => {
    setToast({ 
      open: true,
      message, 
      title: `${severity === 'error' ? 'Error' : 'Success'} - ${title}`,
      severity 
    });
  };

  const hideToast = () => {
    setToast({ 
      ...toast,
      open: false 
    });
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <Snackbar 
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={toast.open} 
        autoHideDuration={6000} 
        onClose={hideToast}
      >
        <Alert 
          elevation={6} 
          variant="filled" 
          onClose={hideToast} 
          severity={toast.severity}
        >
          <Typography variant="subtitle2">
            {toast.title}
            <Typography variant="caption" component={"p"}>
              {toast.message}
            </Typography>
          </Typography>
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};