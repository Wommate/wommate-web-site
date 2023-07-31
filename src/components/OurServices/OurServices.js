
import icone1 from '../../img/icone1.png';
import icone2 from '../../img/icone2.png';
import icone3 from '../../img/icone3.png';
import icone4 from '../../img/icone4.png';
import dev from    '../../img/dev.png';
import marketing from '../../img/marketing.png';
import './OurServices.css';
// import InscriptionForm from '../InscriptionForm/InscriptionForm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import Modal from 'react-modal';



const OpenBrochureDev = () => {

  const brochureDevFile = "/brochuredev.pdf";
  const link = document.createElement("a");
  link.href = brochureDevFile;
  link.target = "_blank"; 
  link.download = "brochuredev.pdf";

  link.dispatchEvent(new MouseEvent("click"));
}
const OpenBrochureMarketing = () => {

  const brochureDevFile = "/marketing_brochure.pdf";
  const link = document.createElement("a");
  link.href = brochureDevFile;
  link.target = "_blank"; 
  link.download = "brochureMarketing.pdf";

  link.dispatchEvent(new MouseEvent("click"));
}


const cardsData = [
  {
    id: 1,
    image: icone1,
    title: "Formation qualifiante et personnalisée",
    content:
      "Boostez votre carrière grâce à nos formations qualifiantes et personnalisées ! Que vous souhaitiez vous spécialiser dans le développement web, le marketing digital ou l'entrepreneuriat, nous possédons l'expertise et les outils nécessaires pour vous propulser vers le succès. Nos programmes vous préparent à affronter le monde professionnel et à acquérir les compétences qui vous démarqueront. Prêt à aller plus loin ? Cliquez sur \"Voir plus pour\" découvrir tous les détails de nos formations et prendre le contrôle de votre avenir professionnel dès maintenant !",
    aos: "fade-up",
  },
  {
    id: 2,
    image: icone2,
    title: " Accompagnement jeunes porteurs de projets",
    content:
      "Développez vos idées et concrétisez vos projets grâce à notre accompagnement personnalisé pour les jeunes entrepreneurs ! Que vous ayez une vision novatrice dans le domaine de la technologie, des arts ou des services, nous avons l'expertise et les ressources nécessaires pour vous aider à réussir. Notre programme vous prépare à relever les défis du monde des affaires et à acquérir les compétences qui feront de vous un leader éclairé. Prêt à passer à l'étape suivante ? Cliquez sur \"Voir plus\" pour découvrir tous les détails de notre accompagnement et prendre le contrôle de votre avenir professionnel dès maintenant ! ",
    aos: "fade-down",
  },
  {
    id: 3,
    image: icone3,
    title: "Accompagnement des entreprises",
    content:
      "Boostez votre entreprise grâce à notre accompagnement personnalisé. Que vous ayez besoin de conseils stratégiques, de consultations professionnelles ou de solutions informatiques sur mesure, nous sommes là pour vous aider. Notre équipe possède l'expertise nécessaire pour répondre à vos besoins spécifiques. Que ce soit pour optimiser vos processus internes, améliorer votre présence en ligne ou développer des applications sur mesure, nous sommes prêts à vous accompagner à chaque étape de votre croissance. Découvrez tous les détails de notre offre d'accompagnement et prenez le contrôle de l'avenir de votre entreprise dès maintenant !",
    aos: "fade-left",
  },
  {
    id: 4,
    image: icone4,
    title: "Formation courte durée",
    content:
      "Que vous cherchiez à acquérir de nouvelles compétences professionnelles ou à vous perfectionner dans un domaine spécifique, nos formations courtes sont là pour répondre à vos besoins. En quelques semaines ou mois, vous pouvez développer des compétences concrètes et pratiques qui auront un impact immédiat sur votre carrière. Que ce soit dans le domaine du développement web, du marketing digital ou de l'entrepreneuriat, nos programmes sont conçus pour vous fournir les connaissances et les outils nécessaires pour réussir. Ne laissez pas le temps être un obstacle, investissez dans votre avenir dès maintenant en découvrant tous les détails de nos formations courtes et en faisant le premier pas vers une nouvelle opportunité professionnelle !",
    aos: "fade-right",
  },
];

const modal = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1000'
  },
  content: {
    width: '80%',
    height: '85%',
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    zIndex: '1000',
    position: 'relative',
  },
  
}



AOS.init();

const OurServices = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }
 
  return (
    <div className="ourService">
      <h1 className="h1" id="service" data-aos="zoom-in-down">
        Nos Services
      </h1>
      <div className="containerServices">
        {cardsData.map((card) => (
          <div key={card.id} className="card" data-aos={card.aos}>
            <div className="cardContent">
              <div className="imageCarte">
                <div className="img">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="profileImage"
                  />
                </div>
                <h2 className="cardTitle">{card.title}</h2>
              </div>
              <p className="cardText">{card.content}</p>
              {/* <button className="card___btn">Voir plus</button> */}
            </div>
          </div>
        ))}
      </div>
      <h1 className="h1" id="service" data-aos="zoom-in-down">
        Formations disponibles
      </h1>

      <div className="container__formation__disponible">
        <div className="formation__dev">
          <img src={dev} alt="formation" className="formation__img" />
          <h3 className="formation__title">Développement Web</h3>
          <p className="formation__text">
            Créer votre propre site web, trouver votre premier emploie , ou bien
            développer votre propre bussiness en ligne.
          </p>
          <div className="formation__btn__section">
            <button className="btn__formation" onClick={OpenBrochureDev}>
              Brochure ⬇{" "}
            </button>
            <button className="btn__formation__enrole" onClick={openModal}>
              S'inscrire{" "}
            </button>
          </div>
        </div>
        <div className="formation__dev">
          <img src={marketing} alt="formation" className="formation__img" />
          <h3 className="formation__title">Marketing digitale</h3>
          <p className="formation__text">
            Devenez autonome en marketing digitale, apprenez à créer des
            campagnes publicitaires, et à gérer vos réseaux sociaux.
          </p>
          <div className="formation__btn__section">
            <button className="btn__formation" onClick={OpenBrochureMarketing}>
              Brochure ⬇{" "}
            </button>
            <button className="btn__formation__enrole" onClick={openModal}>
              S'inscrire{" "}
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modal}>
        <div className="closeModal">
          <button onClick={closeModal} className="btn__close__modal">
            X
          </button>
        </div>

        {/* <InscriptionForm closeModal={closeModal} /> */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfPTbks_bfuADNIEdE_UAVfyPdHJWVeCkIwZ6b5Ng1JlVKXAQ/viewform?embedded=true"
          width="100%"
          height="1317"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Chargement…
        </iframe>
      </Modal>
    </div>
  );
};

export default OurServices;
