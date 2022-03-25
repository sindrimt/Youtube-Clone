import React from "react";

import "./search.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";

const Search = () => {
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
