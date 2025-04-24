import { useState } from "react";
import "../style/Navbar.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Easy<span>Learn</span></h1>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${menuOpen ? "rotate-top" : ""}`}></span>
          <span className={`bar ${menuOpen ? "hide" : ""}`}></span>
          <span className={`bar ${menuOpen ? "rotate-bottom" : ""}`}></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/how-it-works">How it works</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
          <a href="/get-started" className="get-started-btn mobile">Get Started</a>
        </nav>
        <a href="/get-started" className="get-started-btn desktop">Get Started</a>
      </div>
    </header>
  );
}
