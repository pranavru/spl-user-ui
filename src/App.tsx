import { CustomTheme } from "./components/common/theme";
import { Header } from "./components/common/header";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./components/common/routes";
import { ToastProvider } from "./components/pages/common/components/toast-provider";
import { AuthProvider } from "./auth/auth-provider";

const App = () => {
  return (
    <CustomTheme>
      <BrowserRouter>
        <AuthProvider>
          <ToastProvider>
            <Header />
            <AppRoutes />
          </ToastProvider>
        </AuthProvider>
      </BrowserRouter>
    </CustomTheme>
  );
};

export default App
