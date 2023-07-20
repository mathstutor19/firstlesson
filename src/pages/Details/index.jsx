import React from 'react';
import Container from '../../components/Container';
import {
  Button,
  DetailText,
  Discount,
  Image,
  Line,
  Price,
  PriceWrapper,
  TextWrapper,
  Wrapper,
} from './style';
import cardsData from '../../data/Carddata';
import { useParams } from 'react-router';
function Details() {
  let id = useParams();
  id = +id.id - 1;
  let singleDetails = cardsData[id];
  return (
    <Container>
      <Wrapper>
        <Image src={singleDetails.image} alt={cardsData[0].title}></Image>
        <TextWrapper>
          <Discount>${singleDetails.discount}</Discount>
          <Price>founted of ${singleDetails.price} USD</Price>
          <Line line={singleDetails.line} />
          <PriceWrapper>
            <p>
              <strong>{singleDetails.people} </strong> supportars
            </p>
            <p>
              <strong>{singleDetails.day} </strong> left
            </p>
          </PriceWrapper>
          <Button>SUPPORT</Button>
        </TextWrapper>
      </Wrapper>
      <DetailText>
        <Image
          large
          src={singleDetails.image}
          alt={singleDetails.title}
        ></Image>
        <p>{singleDetails.details}</p>
      </DetailText>
    </Container>
  );
}

export default Details;
