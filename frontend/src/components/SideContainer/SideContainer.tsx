import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import { useSelector, useDispatch } from "react-redux";
import { setSubscriptions } from "../../state/actions/users";
import { State } from "../../state/reducers";

import {
  Sidebar,
  SidebarSmall,
  Logo,
  SubscribedOuter,
  SubscribedOuter2,
  Subscribed,
  Line,
  SubscribedOuter3,
  SubProfilePicture,
  SubscribedSmall,
} from "./SideContentStyles";

import { AiOutlineMenu } from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { RiCompass3Line, RiYoutubeFill, RiYoutubeLine, RiVideoLine } from "react-icons/ri";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BsClockHistory, BsClock, BsChevronDown } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

import logo from "../../assets/ytlogotr.png";
import "./sidecontainer.css";

const SideContainer = () => {
  const [expand, setExpand] = useState<boolean>(true);

  const navigate = useNavigate();

  const subs = useSelector((state: State) => state.subs);

  //todo SUBSCRIPTION API URL
  //todo ==============================
  //https://www.googleapis.com/youtube/v3/subscriptions?key=AIzaSyB59He1O3kiRo6FXq0XZ9klPPl300Wy_yw&part=snippet&channelId=UC0sEIyXXalzD1lbwm3D2xpA&maxResults=8
  //todo ==============================
  //todo SUBSCRIPTION API URL

  const [progress, setProgress] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  // Gets the window size
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
      <Logo src={logo} onClick={logoClick} />
      <AiOutlineMenu color="white" size={20} className="hamburger_menu" onClick={handleClick} />

      {/* If the width if more than 1330px or expanded, display full sidebar */}
      {/* Else display small sidebar */}

      {expand && width > 1330 ? (
        <Sidebar>
          <SubscribedOuter>
            <Subscribed>
              <BsFillHouseDoorFill color="white" size={21} /> <span className="textSpan">Startside</span>
            </Subscribed>
            <Subscribed>
              <RiCompass3Line color="white" size={24} /> <span className="textSpan">Utforsk</span>
            </Subscribed>
            <Subscribed>
              <RiYoutubeFill color="white" size={22} /> <span className="textSpan">Shorts</span>
            </Subscribed>
            <Subscribed>
              <RiYoutubeLine color="white" size={22} /> <span className="textSpan">Abbonomenter</span>
            </Subscribed>
          </SubscribedOuter>

          <Line />

          <SubscribedOuter2>
            <Subscribed>
              <MdOutlineVideoLibrary color="white" size={21} /> <span className="textSpan">Bibliotek</span>
            </Subscribed>
            <Subscribed>
              <BsClockHistory color="white" size={22} /> <span className="textSpan">Logg</span>
            </Subscribed>
            <Subscribed>
              <RiVideoLine color="white" size={22} /> <span className="textSpan">Videoene dine</span>
            </Subscribed>
            <Subscribed>
              <BsClock color="white" size={21} /> <span className="textSpan">Se senere</span>
            </Subscribed>
            <Subscribed>
              <BiLike color="white" size={21} /> <span className="textSpan">Likte videoer</span>
            </Subscribed>
            <Subscribed>
              <BsChevronDown color="white" size={15} /> <span className="textSpanArrow">Vis mer</span>
            </Subscribed>
          </SubscribedOuter2>

          <Line />
          {/* If the user is logged in => show subscriptions, else not */}
          {Object.keys(subs).length === 0 && subs.constructor === Object ? (
            <span style={{ color: "white" }}>LOGG PÅ</span>
          ) : (
            <>
              {console.log(subs)}

              <SubscribedOuter3>
                <Subscribed>
                  <span className="abbonomenter">ABBONOMENTER</span>
                </Subscribed>

                {subs.result.items?.map((sub: any, index: number) => {
                  return (
                    <Subscribed key={index}>
                      <SubProfilePicture src={sub.snippet.thumbnails.high.url} />
                      <span className="textSpanSub">{sub.snippet.title}</span>
                    </Subscribed>
                  );
                })}
              </SubscribedOuter3>
            </>
          )}
        </Sidebar>
      ) : (
        <SidebarSmall>
          <SubscribedSmall>
            <BsFillHouseDoorFill color="white" size={21} />
            <span className="under">Startside</span>
          </SubscribedSmall>
          <SubscribedSmall>
            <RiCompass3Line color="white" size={24} />
            <span className="under">Utforsk</span>
          </SubscribedSmall>
          <SubscribedSmall>
            <RiYoutubeFill color="white" size={22} />
            <span className="under">Shorts</span>
          </SubscribedSmall>
          <SubscribedSmall>
            <RiYoutubeLine color="white" size={22} />
            <span className="under">Abbonomenter</span>
          </SubscribedSmall>
          <SubscribedSmall>
            <MdOutlineVideoLibrary color="white" size={21} />
            <span className="under">Bibliotek</span>
          </SubscribedSmall>
        </SidebarSmall>
      )}
    </>
  );
};

export default SideContainer;
