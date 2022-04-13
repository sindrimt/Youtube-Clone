import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import { Sidebar, SidebarSmall, Logo } from "./SideContentStyles";

import { AiOutlineMenu } from "react-icons/ai";

import logo from "../../assets/ytlogotr.png";
import "./sidecontainer.css";

const SideContainer = () => {
  const [expand, setExpand] = useState<boolean>(true);
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setExpand(!expand);
  };

  const logoClick = () => {
    setProgress(progress + 100);
    navigate("/");
  };

  return (
    <>
      <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
      {expand ? (
        <Sidebar>
          <AiOutlineMenu color="white" size={20} className="hamburger_menu" onClick={handleClick} />
          <Logo src={logo} onClick={logoClick} />
        </Sidebar>
      ) : (
        <SidebarSmall>
          <AiOutlineMenu color="white" size={20} className="hamburger_menu" onClick={handleClick} />
        </SidebarSmall>
      )}
    </>
  );
};

export default SideContainer;
