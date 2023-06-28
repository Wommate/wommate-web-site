
import icone1 from '../../img/icone1.png';
import icone2 from '../../img/icone2.png';
import icone3 from '../../img/icone3.png';
import icone4 from '../../img/icone4.png';
import './OurServices.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


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
    content: "Sivous ",
    aos: "fade-down",
  },
  {
    id: 3,
    image: icone3,
    title: "Accompagnement des entreprises",
    content: "",
    aos: "fade-left",
  },
  {
    id: 4,
    image: icone4,
    title: "Formation courte durée",
    content: "",
    aos: "fade-right",
  },
];

AOS.init();

const OurServices = () => {
 
  return (
    <div className="ourService">
      <h1 className="h1" id="service">
        Nos Services
      </h1>
      <div className="containerServices">
        {cardsData.map((card) => (
          <div key={card.id} className="card" data-aos={card.aos} >
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
              <button className="card___btn">Voir plus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
