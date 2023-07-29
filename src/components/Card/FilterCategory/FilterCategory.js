import React, { useState } from 'react';
import FilterTitle from '../FilterTitle/FilterTitle';
import SelectedInput from '../SelectedInput/SelectedInput';
import { Wrapper } from './Filtercategory.style';

function FilterCategory({ title, inputTitle, tick }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <Wrapper>
      <FilterTitle title={title}></FilterTitle>
      {inputTitle.map((item) => (
        <SelectedInput
          key={item}
          title={item}
          isChecked={item.tick}
          onChange={handleCheckboxChange}
        />
      ))}
    </Wrapper>
  );
}

export default FilterCategory;
