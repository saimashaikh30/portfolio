import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 60px",
        background:
          "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND EFFECTS */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          top: "-80px",
          left: "-80px",
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          background: "rgba(94, 56, 189, 0.12)",
          borderRadius: "50%",
          bottom: "-60px",
          right: "-60px",
          filter: "blur(80px)",
        }}
      />

      {/* TITLE */}
      <motion.h2
        style={{
          fontSize: "42px",
          color: "#5E38BD",
          fontWeight: "700",
          marginBottom: "45px",
          zIndex: 2,
        }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* MAIN LAYOUT */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
          width: "100%",
          maxWidth: "1400px",
          flexWrap: "wrap",
          zIndex: 2,
        }}
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            flex: "0.8",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "280px",
          }}
        >
          {/* IMAGE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              padding: "8px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #B8A7E8, #5E38BD, #8E6DD8)",
              boxShadow: "0 20px 40px rgba(94, 56, 189, 0.2)",
            }}
          >
            <img
              src="/profile.jpg"
              alt="Saima Shaikh"
              style={{
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "6px solid white",
              }}
            />
          </motion.div>

          <h3
            style={{
              marginTop: "22px",
              color: "#5E38BD",
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            Saima Shaikh
          </h3>

          <p
            style={{
              marginTop: "8px",
              color: "#7A7A9D",
              fontSize: "17px",
              textAlign: "center",
            }}
          >
            Software Developer
          </p>

          {/* TECH TAGS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
              marginTop: "28px",
            }}
          >
            {[
              "ASP.NET Core",
              "PostgreSQL",
              "React",
              "Laravel",
              "Android",
              "REST APIs",
              "NLP",
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "#5E38BD",
                  color: "white",
                }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: "10px 16px",
                  borderRadius: "999px",
                  background: "#F4F1FA",
                  color: "#5E38BD",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{
            y: -6,
            boxShadow: "0 25px 60px rgba(94, 56, 189, 0.12)",
          }}
          style={{
            flex: "1.4",
            minWidth: "320px",
            background: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.5)",
            borderRadius: "30px",
            padding: "40px",
            boxShadow: "0 20px 50px rgba(94, 56, 189, 0.08)",
          }}
        >
          {/* TOP DECORATION */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "4px",
                background: "#B8A7E8",
                borderRadius: "20px",
              }}
            />

            <div
              style={{
                width: "10px",
                height: "10px",
                background: "#5E38BD",
                borderRadius: "50%",
              }}
            />
          </div>

          <p
            style={{
              fontSize: "17px",
              color: "#6B5B95",
              lineHeight: "2",
            }}
          >
            I’m a software developer with experience building scalable web,
            mobile, and desktop applications using ASP.NET Core, PostgreSQL,
            and modern development frameworks. I enjoy creating efficient
            backend systems, designing RESTful APIs, and solving real-world
            problems through clean and maintainable code.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: "#6B5B95",
              lineHeight: "2",
              marginTop: "20px",
            }}
          >
            During my internship at <strong>Kriptone Solutions</strong> as a
            Backend Developer Intern, I worked with ASP.NET Core and
            PostgreSQL on performance optimization, database management,
            secure file handling, and REST API development for real-world
            applications.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: "#6B5B95",
              lineHeight: "2",
              marginTop: "20px",
            }}
          >
            Alongside backend development, I’ve also explored Android
            development, NLP-based systems, and full-stack application
            development through academic and personal projects. I’m
            particularly interested in backend engineering, API architecture,
            database systems, and building applications that are efficient,
            scalable, and user-focused.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;