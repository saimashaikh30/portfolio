import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: darkMode ? "#1E1E1E" : "#ECECF8",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        zIndex: 1000,
        transition: "0.3s",
        flexWrap: "wrap",
      }}
    >
      {/* NAV LINKS */}
      <div style={navContainerStyle}>
        {["home", "about", "skills", "projects", "experience", "contact"].map(
          (item, index) => (
            <Link
              key={index}
              to={item}
              smooth={true}
              duration={500}
              style={{
                ...navItemStyle,
                color: darkMode ? "#E0D7FF" : "#6B5B95",
              }}
            >
              {item === "contact"
                ? "Contact"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          )
        )}
      </div>

      {/* DARK MODE BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          border: "none",
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "16px",
          background: darkMode
            ? "linear-gradient(135deg,#5E38BD,#8E6DD8)"
            : "#5E38BD",
          color: "white",
          transition: "0.3s",
          flexShrink: 0,
        }}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

const navContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  flexWrap: "wrap",
};

const navItemStyle = {
  textDecoration: "none",
  fontSize: "14px",
  cursor: "pointer",
  transition: "0.3s",
  fontWeight: "500",
};

export default Navbar;