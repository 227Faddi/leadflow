import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
import DashboardLayout from "./layouts/DashboardLayout";
import RootLayout from "./layouts/RootLayout";
// Pages
import AnalyticsPage from "./pages/AnalyticsPage";
import DashboardPage from "./pages/DashboardPage";
import EditLeadPage from "./pages/EditLeadPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NewLeadPage from "./pages/NewLeadPage";
import NotFoundPage from "./pages/NotFoundPage";
import SettingsPage from "./pages/SettingsPage";
import SignupPage from "./pages/SignupPage";
import EnsureAuth from "./utils/auth/EnsureAuth";
import EnsureGuest from "./utils/auth/EnsureGuest";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route element={<EnsureAuth />}>
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="add" element={<NewLeadPage />} />
            <Route path="edit/:id" element={<EditLeadPage />} />
          </Route>
        </Route>
        <Route element={<EnsureGuest />}>
          <Route path="/" element={<HomePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
