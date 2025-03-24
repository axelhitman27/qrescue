import React, { useState, useEffect } from "react";

const initialForm = {
  fullName: "",
  bloodType: "",
  emergencyContact: "",
  allergies: "",
  medicalNotes: ""
};

const QRProfileForm = ({ onSubmit, selected, onCancel }) => {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (selected) setFormData(selected);
    else setFormData(initialForm);
  }, [selected]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialForm);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Ονοματεπώνυμο" className="form-control" required />
      </div>
      <div className="mb-2">
        <input type="text" name="bloodType" value={formData.bloodType} onChange={handleChange} placeholder="Ομάδα Αίματος" className="form-control" />
      </div>
      <div className="mb-2">
        <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} placeholder="Τηλέφωνο Έκτακτης Ανάγκης" className="form-control" />
      </div>
      <div className="mb-2">
        <input type="text" name="allergies" value={formData.allergies} onChange={handleChange} placeholder="Αλλεργίες" className="form-control" />
      </div>
      <div className="mb-2">
        <textarea name="medicalNotes" value={formData.medicalNotes} onChange={handleChange} placeholder="Ιατρικές σημειώσεις" className="form-control" />
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-success">{selected ? "Ενημέρωση" : "Καταχώρηση"}</button>
        {selected && <button onClick={onCancel} type="button" className="btn btn-secondary">Ακύρωση</button>}
      </div>
    </form>
  );
};

export default QRProfileForm;
