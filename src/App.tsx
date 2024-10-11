import { CustomTheme } from "./components/common/theme";
import { Header } from "./components/common/app/header";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./components/common/routes";

const App = () => {
  return (
    <CustomTheme>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </CustomTheme>
  );
}

export default App
