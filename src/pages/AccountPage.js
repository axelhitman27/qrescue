import React, { useEffect, useState } from "react";

const AccountPage = () => {
  const [userData, setUserData] = useState(null);

  const allergyOptions = ["Γύρη", "Ξηροί καρποί", "Φάρμακα", "Τσίμπημα εντόμου"];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("qrescueRegisteredUser"));
    if (stored) {
      setUserData(stored);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setUserData((prev) => ({
        ...prev,
        allergies: checked
          ? [...prev.allergies, value]
          : prev.allergies.filter((a) => a !== value),
      }));
    } else {
      setUserData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    localStorage.setItem("qrescueRegisteredUser", JSON.stringify(userData));
    alert("✅ Το προφίλ σας ενημερώθηκε.");
  };

  if (!userData) return <p className="text-center py-5">Φόρτωση προφίλ...</p>;

  return (
    <div className="container py-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">👤 Το Προφίλ Μου</h2>

      <div className="mb-3">
        <label>Email</label>
        <input type="email" className="form-control" value={userData.email} disabled />
      </div>

      <div className="mb-3">
        <label>Ονοματεπώνυμο</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={userData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Ομάδα Αίματος</label><br />
        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
          <label key={type} className="me-3">
            <input
              type="radio"
              name="bloodType"
              value={type}
              checked={userData.bloodType === type}
              onChange={handleChange}
            />{" "}
            {type}
          </label>
        ))}
      </div>

      <div className="mb-3">
        <label>Αλλεργίες</label><br />
        {allergyOptions.map((a) => (
          <label key={a} className="me-3">
            <input
              type="checkbox"
              value={a}
              checked={userData.allergies.includes(a)}
              onChange={handleChange}
            />{" "}
            {a}
          </label>
        ))}
      </div>

      <div className="mb-3">
        <label>Τηλέφωνο Έκτακτης Ανάγκης</label>
        <input
          type="tel"
          name="emergencyContact"
          className="form-control"
          value={userData.emergencyContact}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Παθήσεις</label>
        <textarea
          name="conditions"
          className="form-control"
          rows={3}
          value={userData.conditions}
          onChange={handleChange}
        ></textarea>
      </div>

      <button className="btn btn-success w-100" onClick={handleSave}>
        💾 Αποθήκευση Αλλαγών
      </button>
    </div>
  );
};

export default AccountPage;
