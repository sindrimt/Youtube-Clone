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

import { formatTime, formatViews, convertTime } from "./cardfunctionality";

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
  views = formatViews(views);

  // Sets time to formatted time
  time = formatTime(time);

  // Converts weird yt video duration format to a normal format
  duration = convertTime(duration);

  return (
    <>
      <Outer>
        <ImageContainer>
          <Image src={`https://i.ytimg.com/vi/${imageId}/${imageRes}.jpg`} alt="Image" />
          <Duration>{duration}</Duration>

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
