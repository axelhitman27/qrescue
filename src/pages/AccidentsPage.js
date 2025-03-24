import React from "react";
import { Link } from "react-router-dom";

const AccidentsPage = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Τι να κάνεις σε περίπτωση ατυχήματος</h1>
      <ul>
        <li>📞 Ειδοποίησε άμεσα το 112 ή τις αρχές.</li>
        <li>🧍‍♂️ Μην μετακινείς τον τραυματία εκτός αν είναι απαραίτητο.</li>
        <li>🧠 Έλεγξε αν είναι συνειδητός και αναπνέει.</li>
        <li>📱 Σκάναρε το αυτοκόλλητο QRescue για άμεση πρόσβαση σε ιατρικές πληροφορίες.</li>
        <li>🩹 Παρέμεινε κοντά του μέχρι να φτάσει βοήθεια.</li>
      </ul>
      <Link to="/" className="btn btn-primary mt-4">🔙 Επιστροφή</Link>
    </div>
  );
};

export default AccidentsPage;
