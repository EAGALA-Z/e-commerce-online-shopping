import React from "react";
import styles from "../styles/Header.module.css";
import { FaSearch, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Top Navigation Bar */}
      <div className={styles.topBar}>
        <div className={styles.logo}>🛍️              </div>
        <div className={styles.siteName}>E-Comme</div>
        <div className={styles.actions}>
          <FaSearch className={styles.icon} title="Search" />
          <FaHeart className={styles.icon} title="Favorites" />
          <FaShoppingBag className={styles.icon} title="Cart" />
          <FaUser className={styles.icon} title="Profile" />
          <select className={styles.languageSelect}>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <nav className={styles.bottomNav}>
        <ul>
          <li>Shop</li>
          <li>Stories</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <hr className={styles.divider} />

      {/* Center Text Section */}
      <div className={styles.heroSection}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Explore our curated collection of fashion, electronics, and lifestyle
          products — all designed to elevate your everyday experience.
        </p>
      </div>
    </header>
  );
};

export default Header;
