// ✅ LoginPage.js – Dummy login για το QRescue Frontend (με logout)
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!!token) setIsLoggedIn(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("userToken", "dummy-token");
      localStorage.setItem("userEmail", email);
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("⚠️ Παρακαλώ συμπληρώστε email και κωδικό.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    alert("Αποσυνδεθήκατε.");
  };

  return (
    <div className="container py-5" style={{ maxWidth: "400px" }}>
      {!isLoggedIn ? (
        <>
          <h2 className="mb-4 text-center">🔐 Είσοδος Χρήστη</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label>Κωδικός Πρόσβασης</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100" onClick={handleLogin}>
              ✅ Σύνδεση
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <h4 className="mb-3">Είστε ήδη συνδεδεμένοι ως:</h4>
          <p><strong>{localStorage.getItem("userEmail")}</strong></p>
          <button className="btn btn-danger mt-3" onClick={handleLogout}>
            🚪 Αποσύνδεση
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;