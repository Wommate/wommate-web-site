import "./Apropos.css";
import apropos_img from "../../img/apropos.png"

const Apropos = () => {
     return (
          <div className="apropos">
               <div className="apropos__title">
                    <h1 className="h1" id="apropos">A propos</h1>
               </div>
               <div className="apropos__content">
                    <div className="apropos__text">
                         <h2 className="h2">
                              Découvrez Wommate, votre partenaire idéal pour la réussite
                              professionnelle !</h2>
                         <p>
                              Nous sommes une entreprise spécialisée
                              dans la formation et l'accompagnement sur mesure des
                              <span> chercheurs d'emploi</span>, des <span>entrepreneurs et futurs
                              entrepreneurs</span>, ainsi que des <span>petites et moyennes
                              entreprises</span>. Explorez nos offres variées, comprenant 
                              une vaste gamme de ressources, de conseils et de formations
                              adaptées à vos besoins. N'hésitez pas à nous contacter dès
                              maintenant pour bénéficier de nos services. Faites un pas 
                              vers l'excellence et laissez-nous vous aider à réaliser vos 
                              objectifs professionnels.
                         </p> 
                         <button className="btn">
                              Voir srvice</button>

                    </div>
                    <div className="apropos__img">
                         <img src={apropos_img} alt="" />
                    </div>
               </div>
          </div>
     );
};

export default Apropos;
