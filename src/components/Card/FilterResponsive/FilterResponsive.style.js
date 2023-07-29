import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0px;
  transition: all 1s ease-in-out;
  @media (min-width: 577px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
  margin-left: 10px;
`;

export const Back = styled.div`
  margin-top: 5px;
`;
