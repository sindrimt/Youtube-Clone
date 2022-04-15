import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import { Sidebar, SidebarSmall, Logo, SubscribedOuter, Subscribed, Line } from "./SideContentStyles";

import { AiOutlineMenu } from "react-icons/ai";

import logo from "../../assets/ytlogotr.png";
import "./sidecontainer.css";

const SideContainer = () => {
  const [expand, setExpand] = useState<boolean>(true);
  const navigate = useNavigate();

  //todo SUBSCRIPTION API URL
  //todo ==============================
  //https://www.googleapis.com/youtube/v3/subscriptions?key=AIzaSyB59He1O3kiRo6FXq0XZ9klPPl300Wy_yw&part=snippet&channelId=UC0sEIyXXalzD1lbwm3D2xpA
  //todo ==============================
  //todo SUBSCRIPTION API URL

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
          <SubscribedOuter>
            <Subscribed>
              <AiOutlineMenu color="white" size={20} /> <span className="textSpan">Startside</span>
            </Subscribed>
            <Subscribed>
              <AiOutlineMenu color="white" size={20} /> <span className="textSpan">Utforsk</span>
            </Subscribed>
            <Subscribed>
              <AiOutlineMenu color="white" size={20} /> <span className="textSpan">Shorts</span>
            </Subscribed>
            <Subscribed>
              <AiOutlineMenu color="white" size={20} /> <span className="textSpan">Abbonomenter</span>
            </Subscribed>
          </SubscribedOuter>
          <Line />
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
