import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import OthersPage from "./pages/OthersPage";
import WelcomePage from "./pages/WelcomePage";
import "./i18n"

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<WelcomePage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/others" element={<OthersPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </>
);

export default App;
