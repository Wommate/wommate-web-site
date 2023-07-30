import './InscriptionForm.css'

const InscriptionForm = () => {

     return (
          <div className="inscriptionForm">
               <form>
                    <div className="form__section">
                         <input type="text" name="prenom" id="name" placeholder='Prenom' />
                         <input type="text" name="nom" id="prenom" placeholder='Nom' />
                    </div>
                    <div className="form__section">
                         <input type="email" name="email" id="email" placeholder='email@gmail.com' />
                         <input type="text" name="phone" id="phone" placeholder='+221 78 778 77 77' />
                    </div>
                    <div className="form__section">
                         <input type="text" name="adresse" id="adresse"  placeholder='Adresse'/>

                         <select name="formation" id="formation">
                              <option value="formation">Pour quelle formation voulez vous inscrire ?</option>
                              <option value="dev">Développement Web</option>
                              <option value="marketing">Marketing Digitale</option>
                         </select>
                    </div>
                    <p>Combien êtes vous prêt à payé?</p>
                         <div className="checkbox__section">
                              <div className="checkbox__section__item">
                                   <input type="checkbox" name="prix" id="prix" />
                                   <label htmlFor="prix">1000$</label>
                              </div>
                              <div className="checkbox__section__item">
                                   <input type="checkbox" name="prix" id="prix" />
                                   <label htmlFor="prix">2000$</label>
                              </div>
                              <div className="checkbox__section__item">
                                   <input type="checkbox" name="prix" id="prix" />
                                   <label htmlFor="prix">3000$</label>
                              </div>
                    </div>

               </form>
          </div>
     )
}

export default InscriptionForm;