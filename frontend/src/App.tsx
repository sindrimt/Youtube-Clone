import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import SideContainer from "./components/SideContainer/SideContainer";
import Content from "./components/Content/Content";
import ContentSearch from "./components/Content/ContentSearch";
import ContentDefault from "./components/Content/ContentDefault";

import { Gap } from "./styles/GloabalStyles";
import { useDispatch } from "react-redux";
import { getUsers } from "./state/actions/users";

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
      <Routes>
        <Route path="/" element={<ContentDefault />} />
        <Route path="/results" element={<ContentSearch />} />
      </Routes>
    </>
  );
};

export default App;
