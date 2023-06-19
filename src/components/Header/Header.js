import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../img/logo_wommate.png";
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
                    <img src={logo} alt="logo" />
               </div>
               <div className="header__menu">
                    <ul>
                         <li>Accueil</li>
                         <li>Partenires</li>
                         <li>A propos</li>
                         <li>Servces</li>
                         <li>Contact</li>
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
