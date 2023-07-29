import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  max-width: 300px;
  @media (max-width: 576px) {
    margin-left: 40px;
  }
`;

export const Input = styled.input`
  width: 22px;
  height: 22px;
  border-radius: 6px;
  border: 1px solid #616161;
`;

export const Label = styled.label`
  color: #5c6260;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-left: 20px;
`;
