import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, CalendarDays, CheckCircle2 } from "lucide-react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      {/* TITLE */}
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      {/* TOP LINE */}
      <div className="top-line-wrapper">
        <div className="small-line"></div>
        <div className="small-dot"></div>
        <div className="small-line"></div>
      </div>

      {/* ICON */}
      <motion.div
        className="experience-icon"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Briefcase size={18} />
      </motion.div>

      {/* SHORT LINE */}
      <div className="vertical-line-top"></div>

      {/* CARD */}
      <motion.div
        className="experience-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h3>Backend Developer Intern</h3>

        <div className="company-name">
          <Building2 size={16} />
          <span>Kriptone Solutions</span>
        </div>

        <div className="duration-pill">
          <CalendarDays size={15} />
          <span>6 Months</span>
        </div>

        <div className="middle-divider">
          <span></span>
        </div>

        <p className="experience-description">
          Worked on backend development using ASP.NET Core, focusing on
          performance optimization, database management, and secure data
          handling in real-world applications.
        </p>

        <ul className="experience-list">
          <li>
            <CheckCircle2 size={16} />
            Reduced server load by 20% through optimized image processing
          </li>

          <li>
            <CheckCircle2 size={16} />
            Managed PostgreSQL operations for efficient data retrieval
          </li>

          <li>
            <CheckCircle2 size={16} />
            Implemented file tracking to monitor file exchanges and enhance
            security of confidential data
          </li>

          <li>
            <CheckCircle2 size={16} />
            Built and maintained RESTful APIs
          </li>
        </ul>
      </motion.div>

      {/* BOTTOM LINE */}
      <div className="vertical-line-bottom"></div>

      {/* END DOT */}
      <div className="bottom-dot"></div>
    </section>
  );
}

export default Experience;