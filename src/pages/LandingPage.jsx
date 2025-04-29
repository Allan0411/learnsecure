import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import school1 from "../assets/school1.jpg";
import school2 from "../assets/school2.jpg";
import school3 from "../assets/school3.jpg";
import school4 from "../assets/school4.jpg";
import school5 from "../assets/school5.jpg";
import logo from "../assets/logo.png"; // <- replace with the actual filename if different

export default function LandingPage() {
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "30+", label: "Expert Teachers" },
    { value: "95%", label: "Happy Children" },
    { value: "20+", label: "Learning Programs" },
  ];

  const features = [
    {
      title: "Academic Learning",
      desc: "Structured curriculum for deep understanding.",
    },
    {
      title: "Safe & Supportive",
      desc: "We provide safety and emotional care.",
    },
    {
      title: "Parent Involvement",
      desc: "Parents stay engaged and informed.",
    },
  ];

  const testimonials = [
    {
      name: "Lisa",
      comment: "My child loves the teachers and the engaging environment!",
    },
    {
      name: "Maria",
      comment: "Truly a transformative space for early education.",
    },
    {
      name: "John",
      comment: "We’ve seen real improvements in confidence and curiosity.",
    },
  ];

  const tags = [
    "Reading Class",
    "Learning Astronomy",
    "Singing Classes",
    "Art Classes",
    "Chemistry Class",
    "Science Classes",
    "Music Classes",
  ];

  const images = [school3, school4, school5];
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="landing-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-left">
        <span className="menu-icon" onClick={() => navigate("/dashboard")}>&#9776;</span>

        </div>
        <div className="header-center">
          <img src={logo} alt="App Logo" className="app-logo" />
          <div>
            <h1 className="logo-title">LearnSecure</h1>
            <p className="logo-subtitle">Empowering Education</p>
          </div>
        </div>
      </header>

      {/* Safety Measures Section */}
      <section className="safety-section">
        <div className="safety-image">
          <img src={images[currentImage]} alt="School Safety" />
          <div className="dot-container">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentImage === index ? "active" : ""}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="safety-content">
          <h2>SAFETY MEASURES IN PLACE</h2>
          <p>
            We do everything to ensure the health, safety and well-being of our
            students and employees.
          </p>
          <div className="info-box">
            Saftey Measures
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        {stats.map((stat, i) => (
          <div className="stat" key={i}>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Class Highlights */}
      <section className="class-highlights">
        <div className="highlight-text">
          <h2>Exciting Classes For Every Kid</h2>
          <p>
            Explore fun and educational classes designed to help children grow
            emotionally and intellectually.
          </p>
          <button>View All</button>
        </div>
        <div className="highlight-image">
          <img src={school1} alt="Drawing Class" />
          <span>Drawing Class</span>
        </div>
        <div className="highlight-image">
          <img src={school2} alt="Reading Class" />
          <span>Reading Class</span>
        </div>
      </section>

      {/* Partners */}
      <section className="partners">
        <div className="logo">Logo1</div>
        <div className="logo">Logo2</div>
        <div className="logo">Logo3</div>
        <div className="logo">Logo4</div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Stimulating Space For Growing Minds</h2>
        <div className="feature-boxes">
          {features.map((f, i) => (
            <div className="feature-box" key={i}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tags */}
      <section className="tags">
        {tags.map((tag, i) => (
          <span className="tag" key={i}>
            {tag}
          </span>
        ))}
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Parents Say About Our Program</h2>
        <div className="testimonial-list">
          {testimonials.map((t, i) => (
            <div className="testimonial" key={i}>
              <p>"{t.comment}"</p>
              <strong>– {t.name}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta">
        <h2>Discover Fun and Engaging Learning</h2>
        <p>Join our programs today and empower your child’s future.</p>
        <button>Enroll Now</button>
      </section>
    </div>
  );
}
