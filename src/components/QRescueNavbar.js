import React, {useEffect, useState} from "react";
import { Link , useNavigate } from "react-router-dom";


const QRescueNavbar = () => {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token);
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("qrescueProfile");
    setIsLoggedIn(false);
    alert("🚪 Αποσυνδεθήκατε.");
    navigate("/");
  };
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          QRescue
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/buy">Αγορά</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accidents">Σε Ατύχημα</Link>
            </li>
            <li className="nav-item">
              <Link to="/health" className="nav-link">Υγεία</Link>
            </li>
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  Το Προφίλ Μου
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn mt-1" onClick={handleLogout}>
                  Αποσύνδεση
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Εγγραφή</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Σύνδεση</Link>
              </li>
            </>
          )}
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default QRescueNavbar;
