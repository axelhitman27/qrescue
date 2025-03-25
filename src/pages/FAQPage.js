import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqData = [
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
  },
];

const FaqItem = ({ question, answer }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="border rounded-3 mb-4 p-3 bg-white text-black"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{ borderColor: "#000" }}
    >
      <h5 className="fw-bold mb-2">{question}</h5>
      <p className="mb-0">{answer}</p>
    </motion.div>
  );
};

const FaqPage = () => {
  return (
      <>
        <div className="container py-5" style={{ maxWidth: "800px" }}>
          <h2 className="text-center mb-5 fw-bold text-black">❓ Συχνές Ερωτήσεις</h2>
            {faqData.map((faq, idx) => (
              <FaqItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
      </div>
    </>  
  );
};



export default FaqPage;
