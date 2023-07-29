import React from 'react';
import { Input, Label, Wrapper } from './SelectedInput.style';

function SelectedInput({ checked, onChange, title }) {
  return (
    <Wrapper>
      <Input type="checkbox" checked={checked} onChange={onChange} />
      <Label>{title}</Label>
    </Wrapper>
  );
}

export default SelectedInput;
