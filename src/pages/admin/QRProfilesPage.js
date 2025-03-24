import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QRProfilesPage = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    const qrKeys = allKeys.filter((key) => key.startsWith("qrProfile-"));
    const qrProfiles = qrKeys.map((key) => {
      const data = JSON.parse(localStorage.getItem(key));
      return { id: key.replace("qrProfile-", ""), ...data };
    });
    setProfiles(qrProfiles);
  }, []);

  const handleDelete = (id) => {
    localStorage.removeItem(`qrProfile-${id}`);
    setProfiles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2 className="mb-4">📋 Διαχείριση QR Προφίλ</h2>
      {profiles.length === 0 ? (
        <p>Δεν υπάρχουν QR προφίλ.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ονοματεπώνυμο</th>
              <th>Εμφανίζονται στο QR</th>
              <th>Ενέργειες</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td>
                  <code>{profile.id.slice(0, 8)}...</code>
                </td>
                <td>{profile.name || <em>-</em>}</td>
                <td>
                  <ul className="mb-0">
                    {profile.show?.name && <li>Όνομα</li>}
                    {profile.show?.bloodType && <li>Αίμα</li>}
                    {profile.show?.allergies && <li>Αλλεργίες</li>}
                    {profile.show?.emergencyContact && <li>Επικοινωνία</li>}
                  </ul>
                </td>
                <td>
                  <Link
                    to={`/qr/${profile.id}`}
                    className="btn btn-sm btn-primary me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 QR Link
                  </Link>
                  <button
                    onClick={() => handleDelete(profile.id)}
                    className="btn btn-sm btn-danger"
                  >
                    🗑️ Διαγραφή
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QRProfilesPage;
