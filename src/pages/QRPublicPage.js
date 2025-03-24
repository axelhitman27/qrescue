import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QRPublicPage = () => {
  const { id } = useParams();
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState(null);

  // Dummy προφίλ για demo
  const dummyProfile = {
    name: "Γιάννης Παπαδόπουλος",
    bloodType: "A+",
    allergies: "Πενικιλίνη",
    emergencyContact: "+30 698 123 4567",
    show: {
      name: true,
      bloodType: true,
      allergies: true,
      emergencyContact: true,
    },
  };

  const handleCallEKAB = () => {
    if (!navigator.geolocation) {
      alert("Η τοποθεσία δεν υποστηρίζεται από τον browser.");
      return;
    }

    setSending(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const loc = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocation(loc);

        // Dummy payload για αποστολή
        const payload = {
          profile: dummyProfile,
          location: loc,
          timestamp: new Date().toISOString(),
        };

        console.log("📤 Αποστολή προς ΕΚΑΒ (demo):", payload);

        setTimeout(() => {
          setMessage("✅ Η κλήση στο ΕΚΑΒ εστάλη επιτυχώς!");
          setSending(false);
        
          // Κλήση στο 112
          window.location.href = "tel:112";
        }, 1500);        
      },
      (error) => {
        alert("❌ Αποτυχία λήψης τοποθεσίας.");
        setSending(false);
      }
    );
  };

  return (
    <div className="container py-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow-lg p-4 text-center">
        <h2 className="mb-3 text-danger">🆘 QRescue Προφίλ</h2>
        <p className="text-muted mb-4">ID: <code>{id}</code></p>

        {dummyProfile.show.name && (
          <p><strong>Όνομα:</strong> {dummyProfile.name}</p>
        )}
        {dummyProfile.show.bloodType && (
          <p><strong>Ομάδα Αίματος:</strong> {dummyProfile.bloodType}</p>
        )}
        {dummyProfile.show.allergies && (
          <p><strong>Αλλεργίες:</strong> {dummyProfile.allergies}</p>
        )}
        {dummyProfile.show.emergencyContact && (
          <p><strong>Τηλ. Έκτακτης Ανάγκης:</strong> {dummyProfile.emergencyContact}</p>
        )}

        <button
          className="btn btn-danger w-100 mt-4"
          onClick={handleCallEKAB}
          disabled={sending}
        >
          📞 Κλήση στο ΕΚΑΒ
        </button>

        {message && <div className="alert alert-success mt-3">{message}</div>}
      </div>

      {/* Χάρτης με τοποθεσία */}
      {location && (
        <div className="mt-4 text-center">
          <h5 className="mb-2">📍 Τοποθεσία Χρήστη</h5>
          <iframe
            title="User Location"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
            allowFullScreen
          ></iframe>
          {location && (
            <div className="mt-3 text-center">
              <small className="text-muted">🔗 Σύνδεσμος Τοποθεσίας:</small>
              <div>
                <a
                  href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`https://maps.google.com/?q=${location.latitude},${location.longitude}`}
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QRPublicPage;
