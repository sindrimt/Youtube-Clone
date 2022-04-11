import React, { useEffect, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./search.css";

const Search = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate(`/results?search_query=${searchInput}`);
  };

  return (
    <>
      <div className="outer_search_box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search_box"
            placeholder="Søk"
            onChange={(e) => setSearchInput(e.currentTarget.value)}
          />
        </form>
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
