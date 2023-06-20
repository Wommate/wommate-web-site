import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './OurServices.css';

const cardsData = [
  {
    id: 1,
    title: 'Service 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet semper nibh, in gravida elit. Sed ut ipsum vitae urna efficitur aliquam id in lacus. Sed sed gravida est. Fusce pharetra, velit at sagittis fermentum, dui neque aliquam justo, a porta tortor sapien vitae risus. Fusce faucibus, sapien eget convallis ullamcorper, tortor dui feugiat ipsum, nec congue lorem mi eget nisi. Vestibulum et efficitur elit, at eleifend dui. Ut et convallis ante, vitae feugiat sapien. Curabitur ultrices vulputate justo. Quisque bibendum venenatis nisl, sit amet scelerisque nisl imperdiet in. Mauris vestibulum sem id eleifend semper. Fusce sollicitudin elementum arcu, at viverra eros consequat non. Nam id neque enim. Aliquam tristique turpis a ante efficitur fermentum. Mauris eu magna ac tellus ullamcorper fringilla at id justo.',
  },
  // Ajoutez les autres données pour les 10 cartes restantes
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
  // Ajoutez les autres données pour les 10 cartes restantes
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
      <Typography variant="h4" component="h1" className="titleServices">
        Nos Services
      </Typography>
      <div className="containerServices">
        {cardsData.map((card) => (
          <Card key={card.id} className="card">
            <CardContent className="cardContent">
              <Typography variant="h6" component="h2">
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={
                  expandedCards.includes(card.id) ? 'contentExpanded' : 'contentTruncated'
                }
              >
                {expandedCards.includes(card.id)
                  ? card.content
                  : `${card.content.slice(0, 400)}${
                      card.content.length > 400 ? '...' : ''
                    }`}
              </Typography>
              {card.content.length > 400 && (
                <Button
                  className="button"
                  color="primary"
                  variant="contained"
                  onClick={() => toggleCardExpansion(card.id)}
                >
                  {expandedCards.includes(card.id) ? 'Lire moins' : 'Lire plus'}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
