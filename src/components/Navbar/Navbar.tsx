import React from "react";

import Search from "../Search/Search";

import { Logo, Div2, Div3, NavContainer } from "./NavbarStyles";

import "./navbar.css";

const Navbar = () => {
  return (
    <NavContainer>
      <Div2>
        <Search />
      </Div2>
      <Div3>JEG ER DIV 3</Div3>
    </NavContainer>
  );
};

export default Navbar;
