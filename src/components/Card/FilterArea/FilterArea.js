import React, { useState } from "react";
import FilterTitle from "../FilterTitle/FilterTitle";
import { Label, Option, Select, Wrapper } from "./FilterArea.style";

function FilterArea() {
  // State to keep track of the selected value
  const [selectedValue, setSelectedValue] = useState("tashkent");

  // Event handler to handle changes in the select input
  const handleChange = event => {
    setSelectedValue(event.target.value);
  };
  // all area
  const area = ["tashkent", "namangan", "andijon"];
  return (
    <Wrapper>
      <FilterTitle title="Hudud"></FilterTitle>
      <Label>Joylashuv hudud bo'yicha yordam berish</Label>
      <Select value={selectedValue} onChange={handleChange}>
        {area.map(item => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
}

export default FilterArea;
