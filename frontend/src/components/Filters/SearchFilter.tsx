import React from "react";
import { Line, Text, FilterDiv } from "./SearchFilterStyles";
import { GiSettingsKnobs } from "react-icons/gi";

const SearchFilter = () => {
  return (
    <>
      <FilterDiv>
        <GiSettingsKnobs size={21} color="lightgray" style={{ transform: "rotate(90deg)" }} />
        <Text>FILTRE</Text>
      </FilterDiv>
      <Line />
    </>
  );
};

export default SearchFilter;
