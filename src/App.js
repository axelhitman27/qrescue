import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import QRescueLanding from "./components/QRescueLanding";
import ProtectedRoute from "./components/ProtectedRoute";
import PageLayout from "./components/PageLayout";
import AdminLayout from "./components/AdminLayout";

// Pages
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import BuyPage from "./pages/BuyPage";
import FAQPage from "./pages/FAQPage";
import AccidentsPage from "./pages/AccidentsPage";
import HealthInfoPage from "./pages/HealthInfoPage";
import UsersPage from "./pages/admin/UsersPage";
import SettingsPage from "./pages/admin/SettingsPage";
import UserProfilePage from "./profile/UserProfilePage";
import QRProfilesPage from "./pages/admin/QRProfilesPage";
import PrivateRoute from "./components/PrivateRoute";
import QRPublicPage from "./pages/QRPublicPage";

function App() {
  return (
    <Router>

      <Routes>
        {/* Αρχική σελίδα με landing + footer */}
        <Route
          path="/"
          element={
            
            <PageLayout>
              <QRescueLanding />
            </PageLayout>
            
          }
        />

        {/* Δημόσιες σελίδες */}
        <Route path="/buy" element={
            <PageLayout> 
              <PrivateRoute>
                <BuyPage />
              </PrivateRoute> 
            </PageLayout> } />
        <Route path="/faq" element={<PageLayout> <FAQPage /> </PageLayout>} />
        <Route path="/accidents" element={<PageLayout><AccidentsPage /></PageLayout>} />
        <Route path="/health-info" element={<PageLayout> <HealthInfoPage /></PageLayout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/admin/qr-profiles" element={<QRProfilesPage />} />
        <Route path="/qr/:id" element={<QRPublicPage />} />

        {/* Admin Dashboard - μόνο αν είσαι logged in */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <UsersPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <SettingsPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
