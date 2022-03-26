import React, { useEffect, useState } from "react";

import "./search.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";

const Search = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const dispatch = useDispatch();

  const { setSearchTerm } = bindActionCreators(actionCreators, dispatch);
  const url = useSelector((state: State) => state.bank);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm(searchInput);
  };

  return (
    <>
      <div className="outer_search_box">
        {/* 
            // todo Kjør en funksjon på submit som tar inn search term
            // Den funksjonen som kjører når man submitter er en useeffect i content.tsx
            // Den sjekker om når siden loader at hvis searchterm er defaultverdi, så søker den etter de mest 
            // populære videoene. Hvis ikke søker den med search term.
            // todo Det beste er vel kanskje å sette opp redux, og sette searchterm til blobal state, og la useeffect lytte på den
        */}
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
