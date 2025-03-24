// ✅ BuyPage.js – Τελικό βήμα με QR Code SVG και μοναδικό ID
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { QRCodeSVG } from "qrcode.react";
import productImage from "../assets/qrescue-sticker.jpg";
import ShippingForm from "../components/ShippingForm";


const PRICE_PER_ITEM = 29.99;

const BuyPage = () => {
  const [step, setStep] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [profile, setProfile] = useState(null);
  const [qrId, setQrId] = useState(null);

  const totalCost = (quantity * PRICE_PER_ITEM).toFixed(2);

  useEffect(() => {
    const stored = localStorage.getItem("qrescueProfile");
    if (stored) setProfile(JSON.parse(stored));
  }, []);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleNext = () => {
    setStep(step + 1);
  };

  const renderProfileData = () => {
    if (!profile || !profile.show) {
      return <p className="text-muted">Δεν έχει συμπληρωθεί προφίλ.</p>;
    }

    return (
      <ul className="list-unstyled">
        {profile.show.name && <li><strong>Όνομα:</strong> {profile.name}</li>}
        {profile.show.bloodType && <li><strong>Ομάδα Αίματος:</strong> {profile.bloodType}</li>}
        {profile.show.allergies && <li><strong>Αλλεργίες:</strong> {profile.allergies}</li>}
        {profile.show.emergencyContact && <li><strong>Τηλ. Έκτακτης Ανάγκης:</strong> {profile.emergencyContact}</li>}
      </ul>
    );
  };

  const handleSubmit = () => {
    const id = uuidv4();
    setQrId(id);

    // Αποθήκευση με ID (προσοχή: σε πραγματική εφαρμογή πρέπει να πάει σε backend)
    localStorage.setItem(`qrProfile-${id}`, JSON.stringify(profile));

    setStep(4);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Απόκτησε το QRescue</h1>

      <div className="row align-items-start">
        {/* Εικόνα προϊόντος */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={productImage}
            alt="QRescue Sticker"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", maxHeight: "400px" }}
          />
          <p className="mt-3">QRescue έξυπνο αυτοκόλλητο για κράνος</p>
        </div>

        {/* Βήματα παραγγελίας */}
        <div className="col-md-6">
          {step === 1 && (
            <div>
              <div className="mb-4">
                <h5>🛒 Επίλεξε Ποσότητα</h5>
                <div className="d-flex justify-content-start align-items-center gap-3">
                  <button type="button" className="btn btn-outline-secondary" onClick={decrement}>-</button>
                  <span className="fs-4">{quantity}</span>
                  <button type="button" className="btn btn-outline-secondary" onClick={increment}>+</button>
                  <span className="ms-3 fw-bold">Σύνολο: {totalCost}€</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="mb-3">💳 Επιλογή Πληρωμής</h5>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="paymentMethod" value="stripe" checked={paymentMethod === "stripe"} onChange={(e) => setPaymentMethod(e.target.value)} id="stripe" />
                  <label className="form-check-label" htmlFor="stripe">💳 Πιστωτική / Χρεωστική (Stripe)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="paymentMethod" value="paypal" checked={paymentMethod === "paypal"} onChange={(e) => setPaymentMethod(e.target.value)} id="paypal" />
                  <label className="form-check-label" htmlFor="paypal">🅿️ Πληρωμή με PayPal</label>
                </div>
              </div>

              <button onClick={handleNext} className="btn btn-success w-100">➕ Συνέχεια στη Σύνοψη</button>
            </div>
          )}

          {step === 2 && (
            <div className="text-start">
              <h4 className="mb-3">📄 Σύνοψη Παραγγελίας</h4>
              <ul className="list-unstyled">
                <li><strong>Ποσότητα:</strong> {quantity}</li>
                <li><strong>Πληρωμή:</strong> {paymentMethod === "stripe" ? "Stripe" : "PayPal"}</li>
                <li><strong>Σύνολο:</strong> {totalCost}€</li>
              </ul>
              <h5 className="mt-4">🧾 Προσωπικά Στοιχεία για QR</h5>
              {renderProfileData()}
              <button className="btn btn-primary w-100 mt-4" onClick={handleNext}>🚚 Συμπλήρωσε Στοιχεία Αποστολής</button>
            </div>
          )}

          {step === 3 && (
            <ShippingForm
                onSubmit={(data) => {
                  setQrId(data.qrId);
                  setStep(4);
                }}
              />
          
          )}

          {step === 4 && (
            <div className="text-center">
              <h4 className="mb-4">✅ Το QRescue σου είναι έτοιμο!</h4>
              <p>Σκάναρε ή τύπωσε το QR:</p>
              {qrId && (
                <QRCodeSVG
                  value={`${window.location.origin}/qr/${qrId}`}
                  size={220}
                  level="H"
                  includeMargin
                />
              )}
              <p className="mt-3">🔗 <code>{`${window.location.origin}/qr/${qrId}`}</code></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
