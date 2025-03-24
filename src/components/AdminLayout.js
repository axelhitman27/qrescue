// AdminLayout.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("qrescueDark") === "true"
  );

  useEffect(() => {
    localStorage.setItem("qrescueDark", darkMode);
  }, [darkMode]);

  return (
    <div className={`admin-layout d-flex ${darkMode ? "dark-mode" : ""}`}>
      {/* Sidebar */}
      <aside className="sidebar bg-dark text-white p-3">
        <h5 className="mb-4">QRescue Admin</h5>
        <nav className="nav flex-column">
          <Link
            to="/admin"
            className={`nav-link text-white ${
              location.pathname === "/admin" ? "fw-bold" : ""
            }`}
          >
            📋 QR Profiles
          </Link>
          <Link
            to="/admin/users"
            className={`nav-link text-white ${
              location.pathname === "/admin/users" ? "fw-bold" : ""
            }`}
          >
            🤝 Users
          </Link>
          <Link
            to="/admin/settings"
            className={`nav-link text-white ${
              location.pathname === "/admin/settings" ? "fw-bold" : ""
            }`}
          >
            ⚙️ Ρυθμίσεις
          </Link>
          <Link to="/admin/qr-profiles" className="nav-link">QR Profiles</Link>
        </nav>

        <div className="mt-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-sm btn-outline-light w-100"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </aside>

      {/* Περιεχόμενο */}
      <main className="main-content flex-grow-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;