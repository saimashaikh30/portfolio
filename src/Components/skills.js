import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skillCategories = {
    Languages: [
      "Java",
      "Kotlin",
      "C#",
      "Python",
      "PHP",
      "C++",
      "JavaScript",
    ],

    "Frameworks & Technologies": [
      "ASP.NET Core",
      "ASP.NET Core Web API",
      "React",
      "Laravel",
      "MERN Stack",
      "Laravel",
      "Natural Language Processing",
    ],

    Databases: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],

    "Development Areas": [
      "Backend Development",
      "REST API Development",
      "Android Development",
      "Full-Stack Development",
      "API Integration",
      "Debugging",
    ],

    Tools: [
      "Git",
      "GitHub",
      "Postman",
      "Android Studio",
      "Visual Studio",
      "VS Code",
    ],
  };

  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        padding: "80px 40px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* TITLE */}
      <motion.h2
        style={{
          fontSize: "42px",
          color: "#5E38BD",
          marginBottom: "60px",
          fontWeight: "700",
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: [1.15, 0.95, 1] }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      {/* SINGLE ROW */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "18px",
          width: "100%",
          maxWidth: "1600px",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(skillCategories).map(
          ([category, skills], index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              style={{
                flex: 1,
                minWidth: "240px",
                maxWidth: "260px",
                background: "#F4F1FA",
                borderRadius: "22px",
                padding: "24px",
                boxShadow: "0 10px 25px rgba(107, 91, 149, 0.10)",
                textAlign: "left",
              }}
            >
              <h3
                style={{
                  color: "#5E38BD",
                  marginBottom: "16px",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                {category}
              </h3>

              <ul
                style={{
                  paddingLeft: "18px",
                  margin: 0,
                }}
              >
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: "8px",
                      color: "#6B5B95",
                      lineHeight: "1.6",
                      fontSize: "14px",
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}

export default Skills;