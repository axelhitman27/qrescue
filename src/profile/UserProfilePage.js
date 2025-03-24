// ✅ UserProfilePage.js – Ενημερωμένο με radio για ομάδα αίματος και πολλαπλά checkbox αλλεργιών
import React, { useState, useEffect } from "react";

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const commonAllergies = ["Φάρμακα", "Γλουτένη", "Γαλακτοκομικά", "Ξηροί καρποί", "Τσιμπήματα εντόμων"];

const defaultProfile = {
  name: "",
  bloodType: "",
  allergies: [],
  emergencyContact: "",
  show: {
    name: true,
    bloodType: true,
    allergies: false,
    emergencyContact: true,
  },
};

const UserProfilePage = () => {
  const [profile, setProfile] = useState(defaultProfile);

  useEffect(() => {
    const stored = localStorage.getItem("qrescueProfile");
    if (stored) setProfile(JSON.parse(stored));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setProfile({
      ...profile,
      show: {
        ...profile.show,
        [e.target.name]: e.target.checked,
      },
    });
  };

  const handleAllergyToggle = (value) => {
    const updated = profile.allergies.includes(value)
      ? profile.allergies.filter((a) => a !== value)
      : [...profile.allergies, value];
    setProfile({ ...profile, allergies: updated });
  };

  const handleSave = () => {
    localStorage.setItem("qrescueProfile", JSON.stringify(profile));
    alert("✅ Το προφίλ αποθηκεύτηκε.");
  };

  return (
    <div className="container py-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">👤 Προσωπικό Προφίλ Χρήστη</h2>

      <div className="mb-3">
        <label>Ονοματεπώνυμο</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={profile.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label d-block">Ομάδα Αίματος</label>
        {bloodTypes.map((type) => (
          <div className="form-check form-check-inline" key={type}>
            <input
              className="form-check-input"
              type="radio"
              name="bloodType"
              value={type}
              checked={profile.bloodType === type}
              onChange={handleChange}
              id={`blood-${type}`}
            />
            <label className="form-check-label" htmlFor={`blood-${type}`}>
              {type}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-3">
        <label className="form-label">Αλλεργίες</label>
        {commonAllergies.map((item) => (
          <div className="form-check" key={item}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={profile.allergies.includes(item)}
              onChange={() => handleAllergyToggle(item)}
              id={`allergy-${item}`}
            />
            <label className="form-check-label" htmlFor={`allergy-${item}`}>
              {item}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-3">
        <label>Τηλέφωνο Έκτακτης Ανάγκης</label>
        <input
          type="text"
          name="emergencyContact"
          className="form-control"
          value={profile.emergencyContact}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <h5>🧾 Επιλογή τι θα εμφανίζεται στο QR:</h5>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="name" checked={profile.show.name} onChange={handleCheckbox} id="showName" />
          <label className="form-check-label" htmlFor="showName">Εμφάνιση Ονοματεπώνυμου</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="bloodType" checked={profile.show.bloodType} onChange={handleCheckbox} id="showBlood" />
          <label className="form-check-label" htmlFor="showBlood">Εμφάνιση Ομάδας Αίματος</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="allergies" checked={profile.show.allergies} onChange={handleCheckbox} id="showAllergies" />
          <label className="form-check-label" htmlFor="showAllergies">Εμφάνιση Αλλεργιών</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="emergencyContact" checked={profile.show.emergencyContact} onChange={handleCheckbox} id="showEmergency" />
          <label className="form-check-label" htmlFor="showEmergency">Εμφάνιση Τηλεφώνου Έκτακτης Ανάγκης</label>
        </div>
      </div>

      <button onClick={handleSave} className="btn btn-success w-100">
        💾 Αποθήκευση Προφίλ
      </button>
    </div>
  );
};

export default UserProfilePage;
