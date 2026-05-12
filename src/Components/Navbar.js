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
        height: "60px",
        backgroundColor: darkMode ? "#1E1E1E" : "#ECECF8",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        zIndex: 1000,
        transition: "0.3s"
      }}
    >

      {/* NAV LINKS */}
      <div style={navContainerStyle}>
        
        <Link
          to="home"
          smooth={true}
          duration={500}
          style={{
            ...navItemStyle,
            color: darkMode ? "#E0D7FF" : "#6B5B95"
          }}
        >
          Home
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={500}
          style={{
            ...navItemStyle,
            color: darkMode ? "#E0D7FF" : "#6B5B95"
          }}
        >
          About
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          style={{
            ...navItemStyle,
            color: darkMode ? "#E0D7FF" : "#6B5B95"
          }}
        >
          Skills
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          style={{
            ...navItemStyle,
            color: darkMode ? "#E0D7FF" : "#6B5B95"
          }}
        >
          Projects
        </Link>

        <Link
          to="experience"
          smooth={true}
          duration={500}
          style={{
            ...navItemStyle,
            color: darkMode ? "#E0D7FF" : "#6B5B95"
          }}
        >
          Experience
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          style={{
            ...navItemStyle,
            color: darkMode ? "#E0D7FF" : "#6B5B95"
          }}
        >
          Contact Me
        </Link>
      </div>

      {/* DARK MODE BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          border: "none",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "18px",
          background: darkMode
            ? "linear-gradient(135deg,#5E38BD,#8E6DD8)"
            : "#5E38BD",
          color: "white",
          transition: "0.3s",
          marginRight: "50px"
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
  gap: "22px",
};

const navItemStyle = {
  textDecoration: "none",
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.3s",
};

export default Navbar;