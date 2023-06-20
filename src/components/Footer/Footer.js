import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:wommateTech@example.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+22100000000';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/22100000000';
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>wommate Tech</h4>
          <ul className="social-links">
            <li>
              <a href="#">Nous contacter</a>
            </li>
            <li>
              <a href="#">Notre Newsletter</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">À propos</a>
            </li>
          </ul>
        </div>
        <div className="iconRs">
          <h4>Réseaux Sociaux</h4>
          <div className="icon" title='Facebook'>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="icon" title='Instagram'>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="icon" title='Instagram'>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="icon" title='Linkedin'>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="icon" title='Whatsapp'>
            <a href="https://wa.me/+221776289674" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon  icon={faWhatsapp} />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            Email: <a href="mailto:wommateTech@example.com">wommateTech@example.com</a>
          </p>
          <p>
            Téléphone: <a href="tel:+221776289674">+221 77 628 96 74</a>
          </p>
          <p>
            Téléphone: <a href="tel:+221782902512">+221 78 290 25 12</a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
