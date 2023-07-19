import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo_wommate.png";
import { Link } from "react-scroll";
import { useState } from "react";
import "./Header.css";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


const Header = () => {
  
  const [menuMobile, setMenuMobile] = useState(false);

  const handleMenuMobile = () => {
    setMenuMobile(!menuMobile);
  };

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <a href="/">
            {" "}
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="header__menu">
          <ul>
            <li>
              <Link
                className="lienA"
                to="hero"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className="lienA"
                to="partenaire"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                Partenaires
              </Link>
            </li>
            <li>
              <Link
                className="lienA"
                to="apropos"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                A propos
              </Link>
            </li>
            <li>
              <Link
                className="lienA"
                to="service"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="lienA"
                to="contact"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="header__btn">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </div>
        {/* Menu mobile */}
        <div className="mobile__hamberger">
          <FontAwesomeIcon
            className="icon"
            icon={faBars}
            onClick={handleMenuMobile}
          />
        </div>
      </div>
      {menuMobile && (
        <div className="header__menu__mobile">
          <ul>
            <li>
              <Link
                className="lienA"
                to="hero"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className="lienA"
                to="partenaire"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                Partenaires
              </Link>
            </li>
            <li>
              <Link
                className="lienA"
                to="apropos"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                A propos
              </Link>
            </li>
            <li>
              <Link
                className="lienA"
                to="service"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="lienA"
                to="contact"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li className="icon__mobile">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
              <FontAwesomeIcon className="icon" icon={faTwitter} />
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
