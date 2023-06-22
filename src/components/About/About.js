import React from 'react';
import './About.css';
import libscode from '../../img/libscode.png'
import bella from '../../img/bella.png'
import oumar from '../../img/oumar.png'


const teams = [
  {
  id: 1,
  nom: 'Oumar DIAGNE',
  photo: oumar,
  poste: 'Développeur web IOT, ingénieur SI',

  },
  {
    id: 2,
    nom: 'Maimouna DIALLO',
    photo: bella,
    poste: 'Développeur web, coach formatrice',
  },
  {
    id: 3,
    nom: 'Libasse THIAM',
    photo: libscode,
    poste: 'Développeur web, ingénieur SI',
  },

]

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="valuesContainer">
        <h2>Nos valeurs</h2>
        <p className='nosValeurs'>
          Wommate accélère la transition vers le 
          numérique. Notre mission est d'accompagner 
          toute personne souhaitant acquérir des 
          compétences dans les métiers du numérique 
          afin d'être apte a affronter le monde 
          professionnel, ou digitaliser son entreprise, 
          que ce soit au stade de l'idéation ou déjà 
          en cours de développement.
        </p>
      </div>
      <div className="teamContainer">
        <h2>Notre équipe</h2>
        <div className="teamImages">
            {teams.map((team) => (<div className="hero___img">
                <img src={team.photo} alt="hero_img" />
                <p className="hero___info">
                  <span className="hero___name">{team.nom}</span>
                  <span className="hero___poste">{team.poste}</span>
                </p>
            </div>))}
        </div>
      </div>
    </div>
  );
};

export default About;
