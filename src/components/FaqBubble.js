import React from "react";
import { useNavigate } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import "./FaqBubble.css"; // Προαιρετικά για custom style

const questions = [
  {
    question: "Τι είναι το QRescue;",
    answer:
      "Το QRescue είναι ένα αυτοκόλλητο QR που τοποθετείται στο κράνος και περιέχει κρίσιμες ιατρικές πληροφορίες για έκτακτη ανάγκη.",
  },
  {
    question: "Ποιος μπορεί να το χρησιμοποιήσει;",
    answer:
      "Οποιοσδήποτε οδηγεί μηχανή, ποδήλατο ή σκούτερ, καθώς και επαγγελματίες διανομείς ή οδηγοί.",
  },
  {
    question: "Πώς διασφαλίζονται τα προσωπικά δεδομένα μου;",
    answer:
      "Μπορείτε να επιλέξετε ποια στοιχεία θα εμφανίζονται στο QR και τα δεδομένα είναι προσβάσιμα μόνο με σάρωση.",
  },
  {
    question: "Μπορώ να ενημερώσω τα στοιχεία μου μετά την αγορά;",
    answer:
      "Ναι, μπορείτε να συνδεθείτε στο λογαριασμό σας και να επεξεργαστείτε το προφίλ σας ανά πάσα στιγμή.",
  },
  {
    question: "Τι περιλαμβάνει η παραγγελία;",
    answer:
      "Η παραγγελία περιλαμβάνει το QRescue αυτοκόλλητο με οδηγίες τοποθέτησης και ενεργοποίησης.",
  }
];

const FaqBubble = () => {
  const navigate = useNavigate();

  return (
    <div className="faq-bubble-container">
      <div className="faq-bubble-header">
        <FaQuestionCircle className="me-2" />
        Συχνές Ερωτήσεις
      </div>

      <ul className="faq-bubble-list">
        {questions.map((q) => (
          <>
            <li >• {q}</li>
            <li >• {q}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default FaqBubble;
