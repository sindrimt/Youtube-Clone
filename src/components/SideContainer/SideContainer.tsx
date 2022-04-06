import React, { useState } from "react";

import { Sidebar, SidebarSmall, Logo } from "./SideContentStyles";

import { AiOutlineMenu } from "react-icons/ai";

import logo from "../../assets/ytlogotr.png";
import "./sidecontainer.css";

const SideContainer = () => {
  const [expand, setExpand] = useState<boolean>(true);

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <>
      {expand ? (
        <Sidebar>
          <AiOutlineMenu color="white" size={20} className="hamburger_menu" onClick={handleClick} />
          <Logo src={logo} />
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
