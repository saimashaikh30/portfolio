import React, { useState } from "react";
import "../App.css";

function Projects() {
  const projects = [
    {
      title: "Beaded Jewellery E-Commerce App",
      description:
        "A full-stack mobile application built using Kotlin (Android) with ASP.NET Core Web API and PostgreSQL backend.",
      images: [
        "/images/ecommerce-1.jpeg",
        "/images/ecommerce-2.jpeg",
        "/images/ecommerce-3.jpeg",
      ],
      github: "https://github.com/saimashaikh30/justaddgelang_eccommerce",
    },
    {
      title: "Alarm Clock App",
      description:
        "A lightweight Android alarm clock application built using Java and SQLite.",
      images: [
        "/images/alarm-1.jpeg",
        "/images/alarm-2.jpeg",
        "/images/alarm-3.jpeg",
      ],
      github: "https://github.com/saimashaikh30/AlarmClock",
    },
    {
      title: "Clinic Management System",
      description:
        "A role-based desktop application for managing prescriptions, medicines, and patient records.",
      images: [
        "/images/clinic-1.png",
        "/images/clinic-3.png",
        "/images/clinic-4.png",
      ],
      github: "https://github.com/PatelVishakha-07/Clinic_Management_System",
    },

    // ✅ Simulator 1
    {
      title: "Screenshot Compression Simulator",
      description:
        "A .NET Core console-based utility that simulates image compression for screenshots.",
      github: "https://github.com/saimashaikh30/screenshot_compression",
    },

    // ✅ Simulator 2
    {
      title: "Job Recommendation System (Resume–JD Matching)",
      description:
        "A Python-based NLP system that matches resumes with job descriptions using similarity techniques.",
      github: "https://github.com/saimashaikh30/Job_recommandation_system",
    },
  ];

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (images) => {
    if (!images) return;
    setCurrentImages(images);
    setCurrentIndex(0);
    setGalleryOpen(true);
  };

  const closeGallery = () => setGalleryOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);

  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length
    );

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            {/* ✅ IMAGE STACK OR SIMULATOR CARD */}
            {project.images ? (
              <div
                className="project-image-stack"
                onClick={() => openGallery(project.images)}
              >
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className={`stack-img img-${i}`}
                  />
                ))}
              </div>
            ) : (
              <div className="simulator-card">
                <span>Utility / Simulator</span>
              </div>
            )}

            {/* CONTENT */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a href={project.github} target="_blank" rel="noreferrer">
                <button className="github-btn">View on GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {galleryOpen && (
        <div className="gallery-modal" style={{ display: "flex" }}>
          <span className="close-btn" onClick={closeGallery}>
            &times;
          </span>

          <img
            src={currentImages[currentIndex]}
            alt=""
            className="gallery-image"
          />

          <div className="gallery-controls">
            <button onClick={prevImage}>❮</button>
            <button onClick={nextImage}>❯</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;