import React from "react";
import {motion} from "framer-motion";
function Home() {
  return (
     <section id="home" style={{ minHeight: "60vh", paddingTop: "20px" }}>

   
    <motion.div style={{
      minHeight: "84vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#8743c0ff"
    }}
     initial={{ scale: 0 }}             
     animate={{ scale: [1.2, 0.95, 1] }} 
     transition={{ duration: 1.5, ease: "easeOut" }}
>      
      <p style={{
        color: "#6B5B95",
        fontSize: 22,
        marginBottom: 6,
        fontStyle: "italic",
      }}
         
      >
        Hello, I'm
      </p>

      <h1 style={{
        margin: 0,
        fontSize: 46,
        color: "#5E38BD",
        fontWeight: 700,
        marginTop:0
      }}>
        Saima Shaikh
      </h1>

      <h2 style={{
        marginTop: 10,
        marginBottom: 20,
        color: "#7A7A9D",
        fontWeight: 400,
        fontSize: 20
      }}>
        MCA Student | Android Developer | ASP.NET Backend Developer
      </h2>

      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={{
          backgroundColor: "#B8A7E8",
          color: "#FFFFFF",
          border: "none",
          padding: "12px 28px",
          borderRadius: "12px",
          fontSize: 16,
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(107, 91, 149, 0.2)"
        }}>
          Download Resume
        </button>
      </a>

<div>
        <a href="https://github.com/saimashaikh30"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src="/github.png"
                alt="Github"
                style={{
                    width:"45px",
                    cursor:"pointer",
                    marginTop:"12px"
                }}/>
        </a>

        <a href="https://www.linkedin.com/in/saima-shaikh30/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/linkedin.png"
                alt="LinkedIn"
                style={{
                    width:"45px",
                    cursor:"pointer",
                    marginTop:"12px"
                }}/>
        </a>
        </div>  
    </motion.div>
     </section>
  );
}

export default Home;
