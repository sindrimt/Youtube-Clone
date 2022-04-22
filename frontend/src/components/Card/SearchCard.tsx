import React from "react";
import axios from "axios";
import styled from "styled-components";

import {
  Outer,
  ImageContainer,
  Image,
  Title,
  Upload,
  Views,
  ViewsContainer,
  Information,
  Profile,
  ProfilePicture,
  ProfileName,
  Duration,
  Description,
} from "./SearchCardStyles";

import "./SearchCardStyles";
import SearchFilter from "../Filters/SearchFilter";

type Props = {
  title: string;
  imageId: string | any;
  channel: string;
  imageRes: string;
  profilePicture: string;
  time: string | any;
  views: number | any;
  duration: any;
  description: string;
};

const Card = ({ title, imageId, channel, imageRes, profilePicture, views, time, duration, description }: Props) => {
  // Converts views to a shorter format
  var unitlist = ["", "k", "mill."];
  let sign = Math.sign(views);
  let unit = 0;
  while (Math.abs(views) > 1000) {
    unit = unit + 1;
    views = Math.floor(Math.abs(views) / 100) / 10;
  }
  // Removes the decimal if unit is K
  if (unitlist[unit] == "k") {
    views = Math.trunc(views) + "k";
  } else {
    views = sign * views + " " + unitlist[unit];
    // Converts to string and replaces . with ,
    views = views.toString().replace(".", ",");
  }

  // Reassignment of time gotten from API
  time = new Date(time.slice(0, -1));

  // Some constants for time measurements
  const msToHours = 1000 * 3600;

  const hours = (Date.now() - time) / msToHours;

  const minutes = msToHours / 60;
  const day = 24;
  const week = 168;
  const month = 730;
  const year = 8765;

  // Converts time from upload to now in a nice format
  if (hours < 1) {
    time = Math.floor((Date.now() - time) / minutes);
    time += time > 1 ? " minutter" : " minutt";
  } else if (hours >= 1 && hours < 24) {
    time = Math.floor((Date.now() - time) / msToHours);
    time += time > 1 ? " timer" : " time";
  } else if (hours >= day && hours < week) {
    time = Math.floor((Date.now() - time) / (msToHours * day)) + " døgn";
  } else if (hours >= week && hours < month) {
    time = Math.floor((Date.now() - time) / (msToHours * week));
    time += time > 1 ? " uker" : " uke";
  } else if (hours >= month && hours < year) {
    time = Math.floor((Date.now() - time) / (msToHours * month));
    time += time > 1 ? " måneder" : " måned";
  } else {
    time = Math.floor((Date.now() - time) / (msToHours * year)) + " år";
  }

  return (
    <>
      <Outer>
        <ImageContainer>
          <Image src={`https://i.ytimg.com/vi/${imageId}/${imageRes}.jpg`} alt="Image" />
          {/* <Duration>{duration}</Duration> */}

          <Information>
            <Title>{title}</Title>
            <ViewsContainer>
              <Views>Sett {views} ganger</Views>
              <Upload>for {time} siden</Upload>
            </ViewsContainer>
            <Profile>
              <ProfilePicture src={profilePicture} />
              <ProfileName>{channel}</ProfileName>
            </Profile>

            <Description>{description.slice(0, 120)}</Description>
          </Information>
        </ImageContainer>
      </Outer>
    </>
  );
};

export default Card;
