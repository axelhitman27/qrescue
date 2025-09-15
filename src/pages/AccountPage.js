import React, { useState, useEffect } from "react";
import PersonalDetailsForm from "../components/PersonalDetailsForm";

const AccountPage = () => {
  const [userData, setUserData] = useState(null);

  // Load user data from localStorage or API
  useEffect(() => {
    const storedData = localStorage.getItem("qrescueProfile");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleFormSubmit = (updatedData) => {
    // Save updated data to localStorage or send it to the backend
    localStorage.setItem("qrescueProfile", JSON.stringify(updatedData));
    setUserData(updatedData); // Update state with the new data
    alert("Τα στοιχεία σας ενημερώθηκαν επιτυχώς!");
  };

  if (!userData) {
    return <p>Φόρτωση δεδομένων...</p>; // Show a loading message while data is being loaded
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">Ο Λογαριασμός Μου</h1>
      <PersonalDetailsForm
        onSubmit={handleFormSubmit}
        initialData={userData} // Pass existing data to the form
      />
    </div>
  );
};

export default AccountPage;