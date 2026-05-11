import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "60px",
        backgroundColor: "#ECECF8",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        zIndex: 1000
      }}
    >
     

      <div style={navStyle}>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="skills"smooth={true} duration={500}>Skills</Link>
        <Link to="projects"smooth={true} duration={500}>Projects</Link>
        <Link to="experience" smooth={true} duration={500}>Experience</Link>
      </div>
    </div>
  );
}

const navStyle = {
  textDecoration: "none",
  color: "#6B5B95",
  fontSize: 16,
   display: "flex", 
   cursor:"pointer",
   gap: "20px"
};

export default Navbar;
