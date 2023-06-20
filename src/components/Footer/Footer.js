import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>À propos</h4>
          <p>Informations sur l'entreprise et sa mission.</p>
        </div>
        <div className="footer-section">
          <h4>Réseaux sociaux</h4>
          <ul className="social-links">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: wommateTech@example.com</p>
          <p>Téléphone: +221 000 00 00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
