import heroImg from "../../img/heros_img.png";
import "./HeroSection.css";
import { Link } from "react-scroll";

const HeroSection = () => {

  return (
    <div className="hero-container" id="hero">
      <div className="hero__text">
        <p className="title">
          Assure ton
          <br />
          <span>devenir </span>
          professionelle
        </p>
        <p>
          Découvrez notre service unique avec deux offres exceptionnelles ! Avec
          Wommate, vous avez le choix entre une offre complète de formation et
          d'accompagnement, ou bien la possibilité de trouver des experts pour
          vous aider à digitaliser votre entreprise.
        </p>
        <div className="hero__btn">
          <Link
            className="btns"
            to="contact"
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
          >
            Contacter
          </Link>
          <Link
            className="btns__2"
            to="service"
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
          >
            Programmes
          </Link>
        </div>
      </div>
      <div className="hero__img">
        <img src={heroImg} alt="hero_img" />
      </div>
    </div>
  );
};

export default HeroSection;
