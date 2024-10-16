import { CustomTheme } from "./components/common/theme";
import { Header } from "./components/common/app/header";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./components/common/routes";
import { ToastProvider } from "./components/pages/common/components/toast-provider";

const App = () => {
  return (
    <CustomTheme>
      <BrowserRouter>
        <ToastProvider>
          <Header />
          <AppRoutes />
        </ToastProvider>
      </BrowserRouter>
    </CustomTheme>
  );
};

export default App
