import React from "react";

const QRProfileList = ({ data, onEdit, onDelete }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Όνομα</th>
          <th>Ομάδα Αίματος</th>
          <th>Επικοινωνία</th>
          <th>Αλλεργίες</th>
          <th>Σημειώσεις</th>
          <th>Ενέργειες</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.fullName}</td>
            <td>{entry.bloodType}</td>
            <td>{entry.emergencyContact}</td>
            <td>{entry.allergies}</td>
            <td>{entry.medicalNotes}</td>
            <td>
              <button className="btn btn-sm btn-primary me-2" onClick={() => onEdit(entry)}>✏️</button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(entry.id)}>🗑️</button>
            </td>
          </tr>
        ))}
        {data.length === 0 && (
          <tr><td colSpan="6" className="text-center">Δεν υπάρχουν καταχωρήσεις.</td></tr>
        )}
      </tbody>
    </table>
  );
};

export default QRProfileList;
