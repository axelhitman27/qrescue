import React from "react";
import { Link } from "react-router-dom";

// Αν έχεις Font Awesome μέσω CDN, δε χρειάζεται import εδώ.
// Αν όχι, βάλε αυτό στο <head> του public/index.html:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

const QRescueFooter = () => {
  return (
    <footer className="bg-light text-dark pt-4 pb-3 border-top mt-5">
      <div className="container">
        <div className="row">
          {/* Στήλη 1: Περιγραφή */}
          <div className="col-md-4 mb-4">
            <h5>QRescue</h5>
            <p>
              Έξυπνο αυτοκόλλητο για κράνος που σώζει ζωές. Παρέχει κρίσιμες
              πληροφορίες σε περίπτωση ατυχήματος ώστε να διευκολύνει τους διασώστες
              να προσφέρουν άμεση βοήθεια.
            </p>
            <div className="mt-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-dark me-3">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-dark me-3">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-dark">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Στήλη 2: Χρήσιμοι Σύνδεσμοι */}
          <div className="col-md-4 mb-4">
            <h5>Χρήσιμα Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/buy" className="text-dark">Απόκτησέ το</Link></li>
              <li><Link to="/accidents" className="text-dark">Σε Περίπτωση Ατυχήματος</Link></li>
              <li><Link to="/health-info" className="text-dark">Πληροφορίες Υγείας</Link></li>
              <li><Link to="/faq" className="text-dark">Συχνές Ερωτήσεις</Link></li>
              <li><Link to="/partners" className="text-dark">Συνεργαζόμενα Μέλη</Link></li>
            </ul>
          </div>

          {/* Στήλη 3: Εγγραφή & Νομικά */}
          <div className="col-md-4 mb-4">
            <h5>Μείνε ενημερωμένος</h5>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Το email σου"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-sm w-100">Εγγραφή στο Newsletter</button>
            </form>
            <ul className="list-unstyled mt-3">
              <li><Link to="/privacy-policy" className="text-dark">Πολιτική Απορρήτου</Link></li>
              <li><Link to="/terms" className="text-dark">Όροι Χρήσης</Link></li>
              <li>Email: <a href="mailto:support@qrescue.gr" className="text-dark">support@qrescue.gr</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-3">
          <small>&copy; {new Date().getFullYear()} QRescue. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default QRescueFooter;
