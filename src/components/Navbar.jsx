// Navbar.jsx
import React from 'react';
import styles from './mainL.module.css'; // Import CSS module
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className={styles.header}> {/* Apply the header class from the CSS module */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} /> {/* Render the logo */}
      </div>
      <nav className={styles.navbar}> {/* Apply the navbar class from the CSS module */}
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
