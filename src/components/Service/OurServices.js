import React, { useState } from 'react';
import './OurServices.css';

const cardsData = [
  {
    id: 1,
    title: 'Service 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet semper nibh, in gravida elit. Sed ut ipsum vitae urna efficitur aliquam id in lacus. Sed sed gravida est. Fusce pharetra, velit at sagittis fermentum, dui neque aliquam justo, a porta tortor sapien vitae risus. Fusce faucibus, sapien eget convallis ullamcorper, tortor dui feugiat ipsum, nec congue lorem mi eget nisi. Vestibulum et efficitur elit, at eleifend dui. Ut et convallis ante, vitae feugiat sapien. Curabitur ultrices vulputate justo. Quisque bibendum venenatis nisl, sit amet scelerisque nisl imperdiet in. Mauris vestibulum sem id eleifend semper. Fusce sollicitudin elementum arcu, at viverra eros consequat non. Nam id neque enim. Aliquam tristique turpis a ante efficitur fermentum. Mauris eu magna ac tellus ullamcorper fringilla at id justo.',
  },
  {
    id: 2,
    title: 'Service 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet semper nibh, in gravida elit. Sed ut ipsum vitae urna efficitur aliquam id in lacus. Sed sed gravida est. Fusce pharetra, velit at sagittis fermentum, dui neque aliquam justo, a porta tortor sapien vitae risus. Fusce faucibus, sapien eget convallis ullamcorper, tortor dui feugiat ipsum, nec congue lorem mi eget nisi. Vestibulum et efficitur elit, at eleifend dui. Ut et convallis ante, vitae feugiat sapien. Curabitur ultrices vulputate justo. Quisque bibendum venenatis nisl, sit amet scelerisque nisl imperdiet in. Mauris vestibulum sem id eleifend semper. Fusce sollicitudin elementum arcu, at viverra eros consequat non. Nam id neque enim. Aliquam tristique turpis a ante efficitur fermentum. Mauris eu magna ac tellus ullamcorper fringilla at id justo.',
  },
  {
    id: 3,
    title: 'Service 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet semper nibh, in gravida elit. Sed ut ipsum vitae urna efficitur aliquam id in lacus. Sed sed gravida est. Fusce pharetra, velit at sagittis fermentum, dui neque aliquam justo, a porta tortor sapien vitae risus. Fusce faucibus, sapien eget convallis ullamcorper, tortor dui feugiat ipsum, nec congue lorem mi eget nisi. Vestibulum et efficitur elit, at eleifend dui. Ut et convallis ante, vitae feugiat sapien. Curabitur ultrices vulputate justo. Quisque bibendum venenatis nisl, sit amet scelerisque nisl imperdiet in. Mauris vestibulum sem id eleifend semper. Fusce sollicitudin elementum arcu, at viverra eros consequat non. Nam id neque enim. Aliquam tristique turpis a ante efficitur fermentum. Mauris eu magna ac tellus ullamcorper fringilla at id justo.',
  },
  {
    id: 4,
    title: 'Service 4',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet semper nibh, in gravida elit. Sed ut ipsum vitae urna efficitur aliquam id in lacus. Sed sed gravida est. Fusce pharetra, velit at sagittis fermentum, dui neque aliquam justo, a porta tortor sapien vitae risus. Fusce faucibus, sapien eget convallis ullamcorper, tortor dui feugiat ipsum, nec congue lorem mi eget nisi. Vestibulum et efficitur elit, at eleifend dui. Ut et convallis ante, vitae feugiat sapien. Curabitur ultrices vulputate justo. Quisque bibendum venenatis nisl, sit amet scelerisque nisl imperdiet in. Mauris vestibulum sem id eleifend semper. Fusce sollicitudin elementum arcu, at viverra eros consequat non. Nam id neque enim. Aliquam tristique turpis a ante efficitur fermentum. Mauris eu magna ac tellus ullamcorper fringilla at id justo.',
  },
];

const OurServices = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCardExpansion = (cardId) => {
    if (expandedCards.includes(cardId)) {
      setExpandedCards(expandedCards.filter((id) => id !== cardId));
    } else {
      setExpandedCards([...expandedCards, cardId]);
    }
  };

  return (
    <div>
      <h1 className="titleServices">Nos Services</h1>
      <div className="containerServices">
        {cardsData.map((card) => (
          <div key={card.id} className="card">
            <div className="cardContent">
              {/* <img src={card.image} alt={card.title} className="profileImage" /> */}
              <div className="imageCarte">
                {/* image à côté du titre de chaque carte */}
                <div className="img"></div>
                <h2 className="cardTitle">{card.title}</h2>
              </div>
              <p
                className={
                  expandedCards.includes(card.id) ? 'contentExpanded' : 'contentTruncated'
                }
              >
                {expandedCards.includes(card.id)
                  ? card.content
                  : `${card.content.slice(0, 400)}${
                      card.content.length > 400 ? '...' : ''
                    }`}
              </p>
              {card.content.length > 400 && (
                <button
                  className="buttonLirePlus"
                  onClick={() => toggleCardExpansion(card.id)}
                >
                  {expandedCards.includes(card.id) ? 'Lire moins' : 'Lire plus'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
