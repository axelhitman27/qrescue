const express = require("express");
const router = express.Router();
const db = require("../db");

// Εγγραφή χρήστη
router.post("/register", async (req, res) => {
  const { email, password, name, bloodType, allergies, emergencyContact, conditions } = req.body;

  try {
    const [existing] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (existing.length > 0) {
      return res.status(400).json({ message: "❌ Ο χρήστης υπάρχει ήδη." });
    }

    await db.execute(
      "INSERT INTO users (email, password, name, bloodType, allergies, emergencyContact, conditions) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [email, password, name, bloodType, JSON.stringify(allergies), emergencyContact, conditions]
    );

    res.json({ message: "✅ Εγγραφή επιτυχής!" });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ message: "Σφάλμα διακομιστή." });
  }
});

module.exports = router;
