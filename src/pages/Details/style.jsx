import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;

  margin-top: 100px;
`;

export const Image = styled.img`
  width: 70vw;
  width: ${(props) => (props.large ? 100 : 80)}%;
`;

export const TextWrapper = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Discount = styled.h2`
  font-size: 50px;
`;

export const Price = styled.p`
  font-size: 20px;
`;

export const Line = styled.div`
  width: ${(props) => props.line}%;
  height: 3px;
  background-color: green;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
`;

export const Button = styled.button`
  font-size: 17px;
  color: white;
  background-color: green;
  border-radius: 50px;
  border: none;
  padding: 10px 50px;
`;

export const DetailText = styled.div`
  font-size: 16px;
  width: 80vw;
  margin: auto;
  margin-top: 100px;
`;
