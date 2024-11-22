import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Layouts
import RootLayout from "./layout/RootLayout";
import DashboardLayout from "./layout/DashboardLayout";
// Pages
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";
import NewLeadPage from "./pages/NewLeadPage";
import EditLeadPage from "./pages/EditLeadPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />

        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="Analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="add" element={<NewLeadPage />} />
          <Route path="edit" element={<EditLeadPage />} />
        </Route>

        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
