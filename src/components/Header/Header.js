import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../img/logo_wommate.png";
import { Link } from 'react-router-dom';
import "./Header.css";
import {
     faFacebook,
     faTwitter,
     faInstagram,
     faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
     return (
          <div className="header">
               <div className="header__logo">
                    <a href="#"> <img src={logo} alt="logo" /></a>
               </div>
               <div className="header__menu">
                    <ul>
                         <li><a href="#" className="lienA">Accueil</a></li>
                         <li><a href="#partenaire" className="lienA">Partenaires</a></li>
                         <li><a href="#apropos" className="lienA">A propos</a></li>
                         <li><a href="#service" className="lienA">Services</a></li>
                         <li><a href="#contact" className="lienA">Contact</a></li>
                    </ul>
               </div>
               <div className="header__btn">
                    <FontAwesomeIcon className="icon" icon={faFacebook} />
                     <FontAwesomeIcon className="icon" icon={faTwitter} />
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
               </div>
          </div>
     );
};

export default Header;

