import React from "react";

import ministry from "../assets/ministry.png";
import geniko_athinwn from "../assets/geniko_athinwn.jpeg";
import ekab from "../assets/ekab.png";

const partners = [
  {
    name: "Υπουργείο Υγείας",
    website: "https://www.moh.gov.gr/",
    logo: {ministry},
  },
  {
    name: "Γενικό Νοσοκομείο Αθηνών",
    website: "https://www.evaggelismos-hosp.gr/",
    logo: {geniko_athinwn},
  },
  {
    name: "ΕΚΑΒ",
    website: "https://www.ekab.gr/",
    logo: {ekab},
  },
];

const PartnersPage = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">🏥 Συνεργαζόμενα Μέλη</h2>
      <div className="row g-4 justify-content-center">
          <div className="col-6 col-md-4 text-center">
            <a href="https://www.moh.gov.gr/" target="_blank" rel="noopener noreferrer">
              <img
                src={ministry}
                alt="Υπουγείο Υγείας"
                className="img-fluid mb-2"
                style={{ maxHeight: "80px", objectFit: "contain" }}
              />
              <p className="fw-bold mt-2">Υπουγείο Υγείας</p>
            </a>
          </div>
          <div className="col-6 col-md-4 text-center">
            <a href="https://www.evaggelismos-hosp.gr/" target="_blank" rel="noopener noreferrer">
              <img
                src={geniko_athinwn}
                alt="Γενικό Νοσοκομείο Αθηνών"
                className="img-fluid mb-2"
                style={{ maxHeight: "80px", objectFit: "contain" }}
              />
              <p className="fw-bold mt-2">Γενικό Νοσοκομείο Αθηνών</p>
            </a>
          </div>
          <div className="col-6 col-md-4 text-center">
            <a href="https://www.ekab.gr/" target="_blank" rel="noopener noreferrer">
              <img
                src={ekab}
                alt="EKAB"
                className="img-fluid mb-2"
                style={{ maxHeight: "80px", objectFit: "contain" }}
              />
              <p className="fw-bold mt-2">ΕΚΑΒ</p>
            </a>
          </div>
      </div>
    </div>
  );
};

export default PartnersPage;
