import React from 'react';
import { CardWrapper } from './style';
import Card from '../../components/Card';
import cardsData from '../../data/Carddata';
import Container from '../../components/Container';
function Home() {
  return (
    <Container>
      <CardWrapper>
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            people={card.people}
            day={card.day}
            discount={card.discount}
            price={card.price}
            line={card.line}
          />
        ))}
      </CardWrapper>
    </Container>
  );
}

export default Home;
