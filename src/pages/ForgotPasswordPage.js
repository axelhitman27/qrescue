import React, { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Παρακαλώ εισάγετε το email σας.");
      return;
    }

    setSubmitted(true);

    // TODO: Στο μέλλον: κάλεσε endpoint π.χ. /api/forgot-password
  };

  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">🔑 Ξέχασα τον Κωδικό</h2>

      {submitted ? (
        <div className="alert alert-success text-center">
          ✅ Αν το email σας υπάρχει στο σύστημά μας, θα λάβετε οδηγίες επαναφοράς.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
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
          <button className="btn btn-dark w-100">Αποστολή Οδηγιών</button>
        </form>
      )}

      <div className="text-center mt-3">
        <a href="/login" className="text-muted">🔙 Επιστροφή στη Σύνδεση</a>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
