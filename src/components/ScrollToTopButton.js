// components/ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        background: "#000",
        color: "#fff",
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 999,
        fontSize: "22px",
      }}
    >
      ↑
    </motion.div>
  );
};

export default ScrollToTopButton;
