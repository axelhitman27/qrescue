import React from "react";
import { Link } from "react-router-dom";

const QRescueNavbar = () => {
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
              <Link className="nav-link" to="/health-info">Υγεία</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Εγγραφή</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">👤 Το Προφίλ Μου</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Είσοδος</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default QRescueNavbar;
