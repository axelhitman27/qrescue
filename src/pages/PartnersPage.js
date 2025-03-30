import React from "react";

const partners = [
  {
    name: "Υπουργείο Υγείας",
    website: "https://www.moh.gov.gr/",
    logo: "https://www.moh.gov.gr/themes/custom/moh_theme/images/logo.png",
  },
  {
    name: "Γενικό Νοσοκομείο Αθηνών",
    website: "https://www.evaggelismos-hosp.gr/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Evangelismos_Hospital_logo.png",
  },
  {
    name: "ΕΚΑΒ",
    website: "https://www.ekab.gr/",
    logo: "https://www.ekab.gr/wp-content/uploads/2020/02/cropped-ekab-logo-1.png",
  },
];

const PartnersPage = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">🏥 Συνεργαζόμενα Μέλη</h2>
      <div className="row g-4 justify-content-center">
        {partners.map((p, idx) => (
          <div key={idx} className="col-6 col-md-4 text-center">
            <a href={p.website} target="_blank" rel="noopener noreferrer">
              <img
                src={p.logo}
                alt={p.name}
                className="img-fluid mb-2"
                style={{ maxHeight: "80px", objectFit: "contain" }}
              />
              <p className="fw-bold mt-2">{p.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
