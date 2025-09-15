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

  const [errors, setErrors] = useState({}); // Track validation errors


  useEffect(() => {
    const stored = localStorage.getItem("shippingData");
    if (stored) setFormData(JSON.parse(stored));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Το όνομα είναι υποχρεωτικό.";
    if (!formData.address.trim()) newErrors.address = "Η διεύθυνση είναι υποχρεωτική.";
    if (!formData.city.trim()) newErrors.city = "Η πόλη είναι υποχρεωτική.";
    if (!/^[0-9]{5}$/.test(formData.postalCode)) newErrors.postalCode = "Η ταχυδρομική κωδικός πρέπει να έχει 5 ψηφία.";
    if (!formData.phone.trim()) newErrors.phone = "Το τηλέφωνο είναι υποχρεωτικό.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Το email δεν είναι έγκυρο.";
    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
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
          className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Διεύθυνση</label>
        <input
          type="text"
          className={`form-control ${errors.address ? "is-invalid" : ""}`}
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="form-label">Πόλη</label>
        <input
          type="text"
          className={`form-control ${errors.city ? "is-invalid" : ""}`}
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="form-label">Ταχυδρομικός Κώδικας</label>
        <input
          type="text"
          className={`form-control ${errors.postalCode ? "is-invalid" : ""}`}
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
        />
        {errors.postalCode && <div className="invalid-feedback">{errors.postalCode}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Τηλέφωνο</label>
        <input
          type="text"
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <button type="submit" className="btn btn-primary">Υποβολή</button>
    </form>
  );
};

export default ShippingForm;
