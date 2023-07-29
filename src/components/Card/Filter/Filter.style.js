import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  column-gap: 40px;
  margin-top: 20px;
  @media (max-width: 767px) {
    margin-left: 0px;
  }
  @media (max-width: 576px) {
    margin: auto;
  }
`;

export const FilterResponsiveWrapper = styled.div`
  transition: all 0.4s;
`;

export const LargeCategory = styled.div`
  animation: ${fadeInAnimation} 0.5s ease-in;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const SmallCategory = styled.div`
  animation: ${fadeInAnimation} 0.5s ease-in;
`;
