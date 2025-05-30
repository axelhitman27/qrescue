import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QRescueLanding.css";

import helmetVideo from "../assets/video_helmet.mp4";
import qrCodeImg from "../assets/qrescue-qr.png";
import StatsSection from "../components/StatsSection";


const QRescueLanding = () => {
  return (
    <div className="qrescue-landing">
      {/* Hero Section */}
      <div className="d-flex flex-column flex-md-row">
        <motion.div
          className="left-section d-flex flex-column justify-content-center align-items-center text-center bg-white text-dark p-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >  
          <video
            src={helmetVideo}
            autoPlay
            loop
            muted
            style={{ Width: "100%", height: "100%",objectFit:"contain" }}/>
          
          <h2 className="mb-4">Απόκτησέ το Τώρα</h2>
          <img
              src={qrCodeImg}
              alt="QR Code Demo"
              className="img-fluid"
              style={{ width: "140px", marginBottom: "20px", borderRadius: "10px" }}
            />

          <a href="/buy" className="btn btn-success btn-lg">
            Buy Now
          </a>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        className="bg-light py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h3 className="mb-4">Γιατί QRescue;</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="fas fa-heartbeat fa-2x mb-3 text-danger"></i>
              <h5>Σώζει Ζωές</h5>
              <p>Άμεση πρόσβαση σε κρίσιμες ιατρικές πληροφορίες.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fas fa-qrcode fa-2x mb-3 text-primary"></i>
              <h5>QR Code Scan</h5>
              <p>Συμβατό με κάθε κινητό τηλέφωνο χωρίς εφαρμογές.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fas fa-shield-alt fa-2x mb-3 text-success"></i>
              <h5>Αδιάβροχο & Ανθεκτικό</h5>
              <p>Κατασκευασμένο για σκληρές συνθήκες.</p>
            </div>
          </div>
        </div>
      </motion.div>
      <StatsSection />
      {/* Testimonials & Trust Section */}
      <motion.div
        className="bg-white py-5 border-top"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h3 className="mb-5">Τι λένε οι χρήστες μας</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <blockquote className="blockquote">
                <p>
                  "Έπεσα με τη μηχανή και το QRescue με έσωσε κυριολεκτικά. Οι
                  διασώστες σκάναραν και είδαν άμεσα τις αλλεργίες μου."
                </p>
                <footer className="blockquote-footer">Γιώργος, Αθήνα</footer>
              </blockquote>
            </div>
            <div className="col-md-4 mb-4">
              <blockquote className="blockquote">
                <p>
                  "Το φοράω στο κράνος μου κάθε μέρα. Είναι μια απλή αλλά φοβερά
                  χρήσιμη ιδέα."
                </p>
                <footer className="blockquote-footer">Μαρία, Πάτρα</footer>
              </blockquote>
            </div>
            <div className="col-md-4 mb-4">
              <blockquote className="blockquote">
                <p>
                  "Ως διασώστης, εύχομαι όλοι οι μοτοσικλετιστές να είχαν
                  QRescue."
                </p>
                <footer className="blockquote-footer">Παναγιώτης, ΕΚΑΒ</footer>
              </blockquote>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="row mt-5">
            <div className="col-md-4">
              <i className="fas fa-shield-heart fa-2x text-success mb-2"></i>
              <p className="fw-bold">100% ασφαλές & GDPR συμβατό</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-user-nurse fa-2x text-danger mb-2"></i>
              <p className="fw-bold">Χρησιμοποιείται από διασώστες</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-tools fa-2x text-primary mb-2"></i>
              <p className="fw-bold">Αδιάβροχο & ανθεκτικό</p>
            </div>
          </div>

          {/* Τελικό CTA */}
          <div className="mt-5">
            <h4 className="mb-3">
              Μην περιμένεις το ατύχημα για να προστατευτείς.
            </h4>
            <a href="/buy" className="btn btn-success btn-lg">
              Απόκτησέ το τώρα
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QRescueLanding;
