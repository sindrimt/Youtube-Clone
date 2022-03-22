import React from "react";

import "./search.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className="outer_search_box">
        <input type="text" className="search_box" placeholder="Søk" />
        <div className="after">
          <AiOutlineSearch size={20} className="icon" />
        </div>
        <div className="microphone">
          <FaMicrophone size={18} className="mic_icon" />
        </div>
      </div>
    </>
  );
};

export default Search;
