import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    bloodType: "",
    allergies: [],
    emergencyContact: "",
    conditions: "",
  });

  const allergyOptions = ["Γύρη", "Ξηροί καρποί", "Φάρμακα", "Τσίμπημα εντόμου"];
  const diseasesOptions = ["Υπέρταση", "Σακχαρώδης Διαβήτης", "Καρδιαγγική Νόσος", "Χρόνια Αναπνευστική Νόσος", "Καρκίνος"];
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        allergies: checked
          ? [...prev.allergies, value]
          : prev.allergies.filter((a) => a !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.name || !formData.bloodType) {
      alert("⚠️ Συμπλήρωσε όλα τα υποχρεωτικά πεδία.");
      return;
    }

    // Temporary dummy storage
    const user = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("qrescueRegisteredUser", JSON.stringify(user));
    alert("✅ Εγγραφή επιτυχής!");
    navigate("/login");
  };

  return (
    <div className="container py-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">📝 Εγγραφή Χρήστη</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Κωδικός Πρόσβασης*</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Ονοματεπώνυμο*</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Ομάδα Αίματος*</label><br />
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
            <label key={type} className="me-3">
              <input
                type="radio"
                name="bloodType"
                value={type}
                checked={formData.bloodType === type}
                onChange={handleChange}
              />{" "}
              {type}
            </label>
          ))}
        </div>

        <div className="mb-3">
          <label>Υποκείμενα Νοσήματα (επιλέξτε όσα ισχύουν)</label><br />
          {diseasesOptions.map((disease) => (
            <label key={disease} className="me-3">
              <input
                type="checkbox"
                name="diseases"
                value={disease}
                checked={formData.allergies.includes(disease)}
                onChange={handleChange}
              />{" "}
              {disease}
            </label>
          ))}
        </div>

        <div className="mb-3">
          <label>Ληφθείσα Φαρμακευτική Αγωγή</label>
          <textarea
            name="conditions"
            className="form-control"
            value={formData.conditions}
            onChange={handleChange}
            rows={3}
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Δυσανεξία  σε Φαρμακευτικές Ουσίες</label>
          <textarea
            name="conditions"
            className="form-control"
            value={formData.conditions}
            onChange={handleChange}
            rows={3}
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Τηλέφωνο Έκτακτης Ανάγκης</label>
          <input
            type="tel"
            name="emergencyContact"
            className="form-control"
            value={formData.emergencyContact}
            onChange={handleChange}
          />
        </div>


        <div className="mb-3">
          <label>ΑΜΚΑ</label>
          <input
            type="text"
            name="amka"
            className="form-control"
            value={formData.amka}
            onChange={handleChange}
          />
        </div>


        <div className="mb-3">
          <label>Αριθμός Κάρτα Αιμοδότη</label>
          <input
            type="text"
            name="bloodDonorCard"
            className="form-control"
            value={formData.bloodDonorCard}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Δημιουργία Λογαριασμού
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
