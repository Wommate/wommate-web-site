import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="valuesContainer">
        <h2>Nos valeurs</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec mauris purus.
          Nulla facilisi. Suspendisse sed vulputate turpis. Nam posuere massa id fringilla
          tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>
        <p>
          Vivamus vulputate sem id est cursus, vitae eleifend neque hendrerit. Duis luctus tempus
          lacus, non hendrerit elit eleifend eget. Integer vel luctus ex, id viverra metus. Nulla a
          dolor elit. Proin rhoncus erat vel enim tincidunt, sit amet vestibulum neque scelerisque.
        </p>
      </div>
      <div className="teamContainer">
        <h2>Notre équipe</h2>
        <div className="teamImages">
          <img src="path/to/image-1.jpg" alt="Membre de l'équipe" />
          <img src="path/to/image-2.jpg" alt="Membre de l'équipe" />
          <img src="path/to/image-3.jpg" alt="Membre de l'équipe" />
          {/* Ajoutez les autres images de l'équipe */}
        </div>
      </div>
    </div>
  );
};

export default About;
