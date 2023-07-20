import React from 'react';
import {
  CardButton,
  CardDateWrapper,
  CardDesc,
  CardDiscount,
  CardImage,
  CardLine,
  CardPrice,
  CardPriceWrapper,
  CardTitle,
  SingleCard,
} from './style';
import { BsPeople, BsPeopleFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Card({
  id,
  title,
  image,
  people,
  day,
  price,
  discount,
  line,
  ...props
}) {
  return (
    <SingleCard>
      <CardImage src={image} alt={title} />
      <CardDesc>
        <CardTitle>{title}</CardTitle>
        <CardDateWrapper>
          <BsPeopleFill /> <span>{people}</span>
          <AiOutlineClockCircle /> <span>{day} left</span>
        </CardDateWrapper>
        <CardLine line={line} />
        <CardPriceWrapper>
          <div>
            <CardDiscount>$ {discount}</CardDiscount>
            <CardPrice> founted of ${price}</CardPrice>
          </div>
          <Link to={`/${id}`}>
            <CardButton>SUPPORT</CardButton>
          </Link>
        </CardPriceWrapper>
      </CardDesc>
    </SingleCard>
  );
}

export default Card;
