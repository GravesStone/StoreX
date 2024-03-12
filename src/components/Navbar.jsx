// Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css'; // Import CSS module
//import logo from './logo.png'; // Import the logo image

function Navbar() {
  return (
    <header className={styles.header}> {/* Apply the header class from the CSS module */}
      <div className={styles.logoContainer}>
        
        <h1 className={styles.storeName}>StoreX</h1> {/* Store name */}
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
