import React from "react";
import { Link } from "react-router-dom";

const HealthInfoPage = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Βασικές Πληροφορίες Υγείας</h1>
      <p>
        Το αυτοκόλλητο QRescue μπορεί να περιλαμβάνει:
      </p>
      <ul>
        <li>👤 Όνομα, ηλικία και ομάδα αίματος</li>
        <li>📞 Τηλέφωνο επαφής έκτακτης ανάγκης</li>
        <li>💊 Αλλεργίες ή χρόνιες παθήσεις</li>
        <li>🩺 Φάρμακα που λαμβάνονται</li>
      </ul>
      <p>
        Αυτές οι πληροφορίες βοηθούν τους διασώστες να δράσουν γρήγορα και σωστά.
      </p>
      <Link to="/" className="btn btn-primary mt-4">🔙 Επιστροφή</Link>
    </div>
  );
};

export default HealthInfoPage;
