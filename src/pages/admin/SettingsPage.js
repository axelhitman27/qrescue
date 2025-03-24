import React, { useEffect, useState } from "react";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("qrescueDark") === "true"
  );
  const [profile, setProfile] = useState({ name: "Admin", email: "admin@qrescue.gr" });

  const handleSave = () => {
    localStorage.setItem("qrescueDark", darkMode);
    localStorage.setItem("qrescueProfile", JSON.stringify(profile));
    alert("Οι ρυθμίσεις αποθηκεύτηκαν ✅");
  };

  useEffect(() => {
    const stored = localStorage.getItem("qrescueProfile");
    if (stored) setProfile(JSON.parse(stored));
  }, []);

  return (
    <div>
      <h2 className="mb-4">⚙️ Προσωπικές Ρυθμίσεις</h2>

      <div className="mb-3">
        <label className="form-label">Όνομα</label>
        <input
          type="text"
          className="form-control"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
      </div>

      <div className="form-check form-switch mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkSwitch"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <label className="form-check-label" htmlFor="darkSwitch">
          🌙 Ενεργοποίηση Dark Mode
        </label>
      </div>

      <button onClick={handleSave} className="btn btn-success">
        💾 Αποθήκευση
      </button>
    </div>
  );
};

export default SettingsPage;