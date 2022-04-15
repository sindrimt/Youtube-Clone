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
  time: string | any;
  views: number | any;
  duration: any;
};

const Card = ({ title, imageId, channel, imageRes, profilePicture, views, time, duration }: Props) => {
  // Converts views to a shorter format
  var unitlist = ["", "K", "M", "G"];
  let sign = Math.sign(views);
  let unit = 0;
  while (Math.abs(views) > 1000) {
    unit = unit + 1;
    views = Math.floor(Math.abs(views) / 100) / 10;
  }
  // Removes the decimal if unit is K
  if (unitlist[unit] == "K") {
    views = Math.trunc(views) + "K";
  } else {
    views = sign * views + unitlist[unit];
  }

  // Reassignment of time gotten from API
  time = new Date(time.slice(0, -1));

  // Some constants for time measurements
  const msToHours = 1000 * 3600;

  const hours = (Date.now() - time) / msToHours;

  const day = 24;
  const week = 168;
  const month = 730;
  const year = 8765;

  // Converts time from upload to now in a nice format
  if (hours < 24) {
    time = Math.floor((Date.now() - time) / msToHours) + " timer";
  } else if (hours >= day && hours < week) {
    time = Math.floor((Date.now() - time) / (msToHours * day)) + " døgn";
  } else if (hours >= week && hours < month) {
    time = Math.floor((Date.now() - time) / (msToHours * week)) + " uker";
  } else if (hours >= month && hours < year) {
    time = Math.floor((Date.now() - time) / (msToHours * month)) + " måneder";
  } else {
    time = Math.floor((Date.now() - time) / (msToHours * year)) + " år";
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
              <Upload>for {time} siden</Upload>
            </Channel>
          </Right>
        </InfoContainer>
      </Outer>
    </>
  );
};

export default Card;
