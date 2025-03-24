import React, { useEffect, useState } from "react";
import QRProfileForm from "../components/QRProfileForm";
import QRProfileList from "../components/QRProfileList";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [qrData, setQrData] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("qrProfiles");
    if (stored) setQrData(JSON.parse(stored));
  }, []);

  const saveToStorage = (data) => {
    localStorage.setItem("qrProfiles", JSON.stringify(data));
  };

  const handleAddOrUpdate = (profile) => {
    let updated;
    if (profile.id) {
      updated = qrData.map((p) => (p.id === profile.id ? profile : p));
    } else {
      profile.id = Date.now();
      updated = [...qrData, profile];
    }
    setQrData(updated);
    saveToStorage(updated);
    setSelected(null);
  };

  const handleDelete = (id) => {
    const updated = qrData.filter((p) => p.id !== id);
    setQrData(updated);
    saveToStorage(updated);
  };

  // Fake δεδομένα για το demo – μπορεί να έρχονται από backend αργότερα
  const registrationsByMonth = {
    labels: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν"],
    datasets: [
      {
        label: "QR Καταχωρήσεις",
        data: [30, 45, 70, 90, 120, 150],
        backgroundColor: "rgba(0, 123, 255, 0.6)",
      },
    ],
  };

  const healthInfoCompletion = {
    labels: ["Με ομάδα αίματος", "Χωρίς", "Με αλλεργίες", "Καμία πληρ."],
    datasets: [
      {
        label: "Πληρότητα Πληροφοριών",
        data: [50, 20, 40, 10],
        backgroundColor: [
          "rgba(40, 167, 69, 0.6)",
          "rgba(255, 193, 7, 0.6)",
          "rgba(220, 53, 69, 0.6)",
          "rgba(108, 117, 125, 0.6)",
        ],
      },
    ],
  };


  return (
    <>
        <div className="container py-5">
        <h1 className="mb-4">👨‍⚕️ Διαχείριση QRescue Προφίλ</h1>
        <QRProfileForm onSubmit={handleAddOrUpdate} selected={selected} onCancel={() => setSelected(null)} />
        <QRProfileList data={qrData} onEdit={setSelected} onDelete={handleDelete} />
        </div>
        <div>
        <h1 className="mb-4">📊 Στατιστικά QRescue</h1>

        <div className="row">
            <div className="col-md-6 mb-4">
                <div className="card p-3 shadow-sm">
                <h5 className="text-center">Καταχωρήσεις QR ανά μήνα</h5>
                <Bar data={registrationsByMonth} />
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <div className="card p-3 shadow-sm">
                <h5 className="text-center">Πληρότητα Υγειονομικών Στοιχείων</h5>
                <Pie data={healthInfoCompletion} />
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default AdminDashboard;
