import React, { useState } from "react";

const PersonalDetailsForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    lastname: initialData.lastname || "",
    bloodType: initialData.bloodType || "",
    emergencyContact: initialData.emergencyContact || "",
    dateOfBirth: initialData.dateOfBirth || "",
    gender: initialData.gender || "", 
    medicalConditions: initialData.medicalConditions || "",
    pharmaDysanexy: initialData.pharmaDysanexy || "",
    disease: initialData.diseasesOptions || []
    
  });

  const diseasesOptions = ["Υπέρταση", "Σακχαρώδης Διαβήτης", "Καρδιαγγική Νόσος", "Χρόνια Αναπνευστική Νόσος", "Καρκίνος"];

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Το όνομα είναι υποχρεωτικό.";
    if (!formData.lastname.trim()) newErrors.lastname = "Το επίθετο είναι υποχρεωτικό.";
    if (!formData.bloodType.trim()) {
      newErrors.bloodType = "Η ομάδα αίματος είναι υποχρεωτική.";
    } else if (!["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].includes(formData.bloodType)) {
      newErrors.bloodType = "Η ομάδα αίματος δεν είναι έγκυρη.";
    }
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = "Το τηλέφωνο έκτακτης ανάγκης είναι υποχρεωτικό.";
    if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = "Η ημερομηνία γέννησης είναι υποχρεωτική.";
    if (!formData.gender.trim()) newErrors.gender = "Το φύλο είναι υποχρεωτικό.";
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
    onSubmit(formData); // Pass the form data to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Όνομα</label>
      <input
        type="text"
        className={`form-control ${errors.name ? "is-invalid" : ""}`}
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
    </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">Επώνυμο</label>
        <input
          type="text"
          className={`form-control ${errors.lastname ? "is-invalid" : ""}`}
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
        {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="bloodType" className="form-label">Ομάδα Αίματος</label>
        <select
          className={`form-control ${errors.bloodType ? "is-invalid" : ""}`}
          id="bloodType"
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
        >
          <option value="">Επιλέξτε</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        {errors.bloodType && <div className="invalid-feedback">{errors.bloodType}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="disease" className="form-label">Αλλεργίες</label>
        {diseasesOptions.map((disease) => (
            <label key={disease} className="me-3">
              <input
                type="checkbox"
                name="disease"
                value={disease}
                checked={formData.disease.includes(disease)}
                onChange={handleChange}
              />{" "}
              {disease}
            </label>
          ))}
      </div>

      <div className="mb-3">
        <label htmlFor="emergencyContact" className="form-label">Τηλέφωνο Έκτακτης Ανάγκης</label>
        <input
          type="text"
          className={`form-control ${errors.emergencyContact ? "is-invalid" : ""}`}
          id="emergencyContact"
          name="emergencyContact"
          value={formData.emergencyContact}
          onChange={handleChange}
        />
        {errors.emergencyContact && <div className="invalid-feedback">{errors.emergencyContact}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="dateOfBirth" className="form-label">Ημερομηνία Γέννησης</label>
        <input
          type="date"
          className={`form-control ${errors.dateOfBirth ? "is-invalid" : ""}`}
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="gender" className="form-label">Φύλο</label>
        <select
          className={`form-control ${errors.gender ? "is-invalid" : ""}`}
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Επιλέξτε</option>
          <option value="male">Άνδρας</option>
          <option value="female">Γυναίκα</option>
          <option value="other">Άλλο</option>
        </select>
        {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="medicalConditions" className="form-label">Ληφθείσα Φαρμακευτική Αγωγή</label>
        <textarea
          className="form-control"
          id="medicalConditions"
          name="medicalConditions"
          value={formData.medicalConditions}
          onChange={handleChange}
        />
      </div>


      <div className="mb-3">
        <label htmlFor="pharmaDysanexy" className="form-label">Δυσανεξία  σε Φαρμακευτικές Ουσίες</label>
        <textarea
          className="form-control"
          id="pharmaDysanexy"
          name="pharmaDysanexy"
          value={formData.pharmaDysanexy}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
          <label>Υποκείμενα Νοσήματα (επιλέξτε όσα ισχύουν)</label><br />
          
        </div>

      <button type="submit" className="btn btn-primary">Υποβολή</button>
    </form>
  );
};

export default PersonalDetailsForm;