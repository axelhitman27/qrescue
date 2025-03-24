// ✅ ShippingForm.js – Φόρμα Στοιχείων Αποστολής με validation & αποθήκευση
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ShippingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Ελλάδα",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("shippingData");
    if (stored) setFormData(JSON.parse(stored));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePostalCode = (code) => {
    return /^[0-9]{5}$/.test(code);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert("⚠️ Το email δεν είναι έγκυρο.");
      return;
    }
    if (!validatePostalCode(formData.postalCode)) {
      alert("⚠️ Η ταχυδρομική κωδικός πρέπει να έχει 5 ψηφία.");
      return;
    }
    localStorage.setItem("shippingData", JSON.stringify(formData));

    // ✅ Δημιουργία QR ID εδώ και αποθήκευση προφίλ
    const id = uuidv4();
    const profile = JSON.parse(localStorage.getItem("qrescueProfile"));
    localStorage.setItem(`qrProfile-${id}`, JSON.stringify(profile));

    // Περνάμε πίσω το ID στο BuyPage για εμφάνιση QR
    onSubmit({ ...formData, qrId: id });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h4 className="mb-4">🚚 Στοιχεία Αποστολής</h4>

      <div className="mb-3">
        <label>Ονοματεπώνυμο</label>
        <input
          type="text"
          name="fullName"
          className="form-control"
          required
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Διεύθυνση</label>
        <input
          type="text"
          name="address"
          className="form-control"
          required
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Πόλη</label>
          <input
            type="text"
            name="city"
            className="form-control"
            required
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Τ.Κ.</label>
          <input
            type="text"
            name="postalCode"
            className="form-control"
            required
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3">
        <label>Χώρα</label>
        <input
          type="text"
          name="country"
          className="form-control"
          required
          value={formData.country}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Τηλέφωνο</label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        ✅ Ολοκλήρωση Παραγγελίας
      </button>
    </form>
  );
};

export default ShippingForm;
