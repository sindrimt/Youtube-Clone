import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SideContainer from "./components/SideContainer/SideContainer";
import Content from "./components/Content/Content";

import { Gap, LeftGap } from "./styles/GloabalStyles";

import "./styles/app.css";

const App = () => {
  return (
    //TODO Heller Lag content som en div med satt height og widt
    <>
      <Navbar />
      <SideContainer />
      <LeftGap>
        <Gap>
          <Content />
        </Gap>
      </LeftGap>
    </>
  );
};

export default App;
