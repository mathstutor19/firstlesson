import React, { useState } from 'react';
import FilterArea from '../FilterArea/FilterArea';
import FilterCategory from '../FilterCategory/FilterCategory';
import FilterResponsive from '../FilterResponsive/FilterResponsive';
import { FilterResponsiveWrapper, Wrapper, Animation } from './Filter.style';
import { useMyContext } from '../../../contextapi';
function Filter() {
  const [show, setShow] = useState(false);
  const { data, setData } = useMyContext();
  const category = [
    {
      id: 1,
      title: 'Xayriya turlari',
      inputTitle: ["Ta'lim", 'Salomatlik', "Yolg'iz onalar"],
      tick: false,
    },
    {
      id: 2,
      title: 'Saralash',
      inputTitle: [
        'Deyarli moliyalashtirilgan ',
        'Eng yangisi',
        ' Tez orada tugaydigyon',
      ],
      tick: false,
    },
  ];
  const changeFilter = () => {
    setData(!data);
    console.log(data);
  };
  // Event listener qo'shamiz
  window.addEventListener('resize', function () {
    if (window.innerWidth > 576) {
      setData(true);
    } else {
      setData(false);
    }
  });
  return (
    <Wrapper>
      <FilterResponsiveWrapper onClick={changeFilter}>
        <FilterResponsive />
      </FilterResponsiveWrapper>
      {data && (
        <Animation showed={data.toString()}>
          {category.map((item) => (
            <FilterCategory
              key={item.id}
              title={item.title}
              inputTitle={item.inputTitle}
              tick={item.tick}
            />
          ))}
          <FilterArea />
        </Animation>
      )}
    </Wrapper>
  );
}

export default Filter;
