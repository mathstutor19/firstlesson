import styled from 'styled-components';
export const SingleCard = styled.article`
  width: calc((100% - 60px) / 3);
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const CardImage = styled.img`
  width: 100%;
  height: 250px;
`;

export const CardDesc = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  min-height: 60px;
`;

export const CardDateWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`;
export const CardLine = styled.div`
  width: ${(props) => props.line}%;
  height: 3px;
  background-color: green;
`;

export const CardPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardDiscount = styled.b`
  font-size: 20px;
`;

export const CardPrice = styled.p`
  font-size: 12px;
`;

export const CardButton = styled.button`
  font-size: 17px;
  color: white;
  background-color: green;
  border-radius: 50px;
  border: none;
  padding: 5px 20px;
`;
