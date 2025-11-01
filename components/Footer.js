import React from "react";
import styles from "../styles/Footer.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <div>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from FakeStore.</p>
        </div>
        <div className={styles.subscribe}>
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Footer Main Sections */}
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <h4>FakeStore</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Categories</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Login / Register</li>
            <li>Payment & Pricing</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contact Us</h4>
          <p>+1 800 123 4567</p>
          <p>support@fakestore.com</p>
        </div>

        <div className={styles.column}>
          <h4>Follow Us</h4>
          <div className={styles.socials}>
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Footer Bottom */}
      <div className={styles.bottom}>
        <p>© 2025 FakeStore. All rights reserved.</p>
        <div className={styles.payments}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
