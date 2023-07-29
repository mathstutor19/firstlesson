import styled from 'styled-components';
import arrow from './Polygon.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Label = styled.p`
  max-width: 230px;
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  @media (max-width: 576px) {
    margin-left: 40px;
  }
`;

export const Select = styled.select`
  width: 203px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #a7abaa;
  background: #fff;
  margin-top: 20px;
  padding: 0px 10px;
  text-transform: capitalize;
  appearance: none; /* Hide the default arrow */
  -webkit-appearance: none; /* For Safari */
  -moz-appearance: none; /* For Firefox */

  background-image: url(${arrow}); /* Use the arrow image as the background */
  background-position: 95% center; /* Position the image on the right side */
  background-repeat: no-repeat;
  &:focus {
    outline: none !important;
    border: 1px solid #a7abaa;
  }
  @media (max-width: 576px) {
    margin-left: 40px;
  }
`;

export const Option = styled.option`
  margin-left: 10px;
  margin: 5px 10px;
`;
