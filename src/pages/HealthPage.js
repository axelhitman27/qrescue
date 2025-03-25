import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaTint,
  FaSyringe,
  FaPhoneAlt,
  FaNotesMedical,
} from "react-icons/fa";

const healthTips = [
  {
    icon: <FaTint size={32} />,
    title: "Ομάδες Αίματος",
    description:
      "Μάθε ποια είναι η ομάδα σου και ποιοι μπορούν να σου δώσουν ή να λάβουν αίμα σε επείγουσα κατάσταση.",
  },
  {
    icon: <FaSyringe size={32} />,
    title: "Αλλεργίες & Αντιδράσεις",
    description:
      "Σημαντικό να αναφέρεται αν έχεις αλλεργία σε φάρμακα όπως πενικιλίνη, αναλγητικά, τρόφιμα, κ.λπ.",
  },
  {
    icon: <FaPhoneAlt size={32} />,
    title: "Πρώτες Βοήθειες & Κλήση 112",
    description:
      "Σε ατύχημα κάλεσε άμεσα το 112. Μίλησε καθαρά, δώσε τοποθεσία και πες τι συνέβη.",
  },
  {
    icon: <FaHeartbeat size={32} />,
    title: "Χρόνιες Παθήσεις",
    description:
      "Κατέγραψε αν έχεις χρόνιες παθήσεις (π.χ. διαβήτη, άσθμα, καρδιοπάθεια) – μπορεί να σώσουν ζωές.",
  },
  {
    icon: <FaNotesMedical size={32} />,
    title: "Τι να περιλαμβάνει το QR",
    description:
      "Εμφάνιση επιλεγμένων στοιχείων: όνομα, ομάδα αίματος, αλλεργίες, παθήσεις, τηλέφωνο ανάγκης.",
  },
];

const HealthCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="p-4 border rounded-3 bg-white text-black shadow-sm h-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{ borderColor: "#000" }}
    >
      <div className="mb-3 text-center">{icon}</div>
      <h5 className="fw-bold text-center mb-2">{title}</h5>
      <p className="text-center small mb-0">{description}</p>
    </motion.div>
  );
};

const HealthPage = () => {
  const allergyOptions = ["Γύρη", "Ξηροί καρποί", "Φάρμακα", "Τσίμπημα εντόμου"];
  const [bloodType, setBloodType] = useState("");
  const [allergies, setAllergies] = useState([]);
  const [conditions, setConditions] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("qrescueProfile"));
    if (stored) {
      setBloodType(stored.bloodType || "");
      setAllergies(stored.allergies || []);
      setConditions(stored.conditions || "");
    }
  }, []);

  const handleSave = () => {
    const updatedProfile = {
      ...JSON.parse(localStorage.getItem("qrescueProfile") || "{}"),
      bloodType,
      allergies,
      conditions,
    };
    localStorage.setItem("qrescueProfile", JSON.stringify(updatedProfile));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleCheckbox = (value) => {
    setAllergies((prev) =>
      prev.includes(value)
        ? prev.filter((a) => a !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="container py-5" style={{ maxWidth: "1000px" }}>
      <h2 className="text-center mb-3 fw-bold text-black">🩺 Χρήσιμες Πληροφορίες Υγείας</h2>
      <p className="text-center text-muted mb-4">
        Πριν αποκτήσεις το QRescue, δες ποια στοιχεία είναι σημαντικό να γνωρίζεις και να δηλώσεις στο προφίλ σου.
      </p>

      <a
        href="#health-section"
        className="btn btn-dark d-block mx-auto mb-5"
        style={{ maxWidth: "220px" }}
      >
        Μάθε περισσότερα ⬇️
      </a>

      <div id="health-section" className="row g-4 mb-5">
        {healthTips.map((tip, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <HealthCard {...tip} />
          </div>
        ))}
      </div>

      {/* Φόρμα */}
      <div className="border rounded-4 p-4 bg-white text-black shadow-sm">
        <h4 className="mb-3">📋 Συμπλήρωσε τα βασικά στοιχεία σου</h4>

        <div className="mb-3">
          <label className="form-label">Ομάδα Αίματος</label><br />
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
            <label key={type} className="me-3">
              <input
                type="radio"
                name="bloodType"
                value={type}
                checked={bloodType === type}
                onChange={(e) => setBloodType(e.target.value)}
              />{" "}
              {type}
            </label>
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Αλλεργίες</label><br />
          {allergyOptions.map((a) => (
            <label key={a} className="me-3">
              <input
                type="checkbox"
                value={a}
                checked={allergies.includes(a)}
                onChange={() => handleCheckbox(a)}
              />{" "}
              {a}
            </label>
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Παθήσεις (π.χ. διαβήτης, άσθμα)</label>
          <textarea
            className="form-control"
            value={conditions}
            onChange={(e) => setConditions(e.target.value)}
            rows={3}
          ></textarea>
        </div>

        <button className="btn btn-dark" onClick={handleSave}>
          💾 Αποθήκευση Στοιχείων
        </button>

        {saved && (
          <div className="alert alert-success mt-3">✅ Τα στοιχεία αποθηκεύτηκαν!</div>
        )}
      </div>

      {/* CTA */}
      <div className="text-center mt-5">
        <h4 className="mb-3">Είσαι έτοιμος για το δικό σου QRescue;</h4>
        <a href="/buy" className="btn btn-outline-dark btn-lg">
          Απόκτησε το τώρα →
        </a>
      </div>
    </div>
  );
};

export default HealthPage;
