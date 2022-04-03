import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import SideContainer from "./components/SideContainer/SideContainer";
import Content from "./components/Content/Content";

import { Gap, LeftGap } from "./styles/GloabalStyles";
import { useDispatch } from "react-redux";
import { getUsers, changeUrl } from "./state/actions/users";

import "./styles/app.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
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
