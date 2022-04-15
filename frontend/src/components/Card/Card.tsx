import React from "react";
import axios from "axios";
import styled from "styled-components";

import {
  Outer,
  ImageContainer,
  Image,
  ProfilePicture,
  Right,
  Left,
  InfoContainer,
  Channel,
  Upload,
  Views,
  Title,
  Duration,
} from "./CardStyles";

import "./CardStyles";

type Props = {
  title: string;
  imageId: string | any;
  channel: string;
  imageRes: string;
  profilePicture: string;
  time: number;
  views: number | any;
  duration: any;
};

const Card = ({ title, imageId, channel, imageRes, profilePicture, views, time, duration }: Props) => {
  var unitlist = ["", "K", "M", "G"];
  let sign = Math.sign(views);
  let unit = 0;
  while (Math.abs(views) > 1000) {
    unit = unit + 1;
    views = Math.floor(Math.abs(views) / 100) / 10;
  }
  if (unitlist[unit] == "K") {
    views = Math.trunc(views) + "K";
  } else {
    views = sign * views + unitlist[unit];
  }
  return (
    <>
      <Outer>
        <ImageContainer>
          <Image src={`https://i.ytimg.com/vi/${imageId}/${imageRes}.jpg`} alt="Image" />
          <Duration>{duration}</Duration>
        </ImageContainer>

        <InfoContainer>
          <Left>
            <ProfilePicture src={profilePicture} />
          </Left>
          <Right>
            <Title>
              {title} <br />{" "}
            </Title>
            <Channel>
              {channel} <br />
              <Views>Sett {views} ganger</Views>
              <Upload>for {time} timer siden</Upload>
            </Channel>
          </Right>
        </InfoContainer>
      </Outer>
    </>
  );
};

export default Card;
