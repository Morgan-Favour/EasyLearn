import React from 'react';
import NavBar from "../components/NavBar.jsx";
import "../style/Hero.css";
import hero from "../assets/hero-image.png";

export default function Hero() {
  return (
    <>
      <NavBar />
      <div className="hero-container">
        <div className="hero-text">
          <h1>Your Gateway to Smarter <br />Learning</h1>
          <p>Unlock unlimited access to past questions, live tutoring and a marketplace where educators thrive.</p>
          <button className="hero-button">
            Get Started
            <span className="sparkle"></span>
          </button>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Hero Image" />
          <div className="courses-badge">10+ Courses</div>
        </div>
      </div>
    </>
  );
}