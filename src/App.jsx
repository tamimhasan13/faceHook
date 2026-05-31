import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes></PrivateRoutes>}>
          <Route element={<HomePage></HomePage>} path="/" exact />
          <Route element={<ProfilePage></ProfilePage>} path="/profile" />
        </Route>

        <Route element={<LoginPage></LoginPage>} path="/login" />
        <Route element={<RegisterPage></RegisterPage>} path="/register" />

        <Route element={<NotFoundPage></NotFoundPage>} path="*" />
      </Routes>
    </>
  );
}

export default App;
