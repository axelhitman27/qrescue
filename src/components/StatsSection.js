import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="container my-5 py-4" ref={ref}>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <h2 className="display-5 fw-bold text-primary">
            {inView && <CountUp end={823} duration={2} />}+
          </h2>
          <p className="mb-0">Παραγγελίες QRescue</p>
        </div>
        <div className="col-md-4 mb-4">
          <h2 className="display-5 fw-bold text-danger">
            {inView && <CountUp end={112} duration={2} />}
          </h2>
          <p className="mb-0">Κλήσεις στο ΕΚΑΒ</p>
        </div>
        <div className="col-md-4 mb-4">
          <h2 className="display-5 fw-bold text-success">
            {inView && <CountUp end={1572} duration={2.5} />}
          </h2>
          <p className="mb-0">Σκαναρίσματα QR</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;