import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />

        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
