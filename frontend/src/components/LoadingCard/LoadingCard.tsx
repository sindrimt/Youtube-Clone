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
  Title,
} from "./LoadingCardStyles";

import "./LoadingCardStyles";

type Props = {
  title?: string;
  imageId?: string | any;
  channel?: string;
  imageRes?: string;
  profilePicture?: string;
  time?: number;
  views?: number;
  duration?: any;
};

const LoadingCard = () => {
  return (
    <>
      <Outer>
        <ImageContainer>
          <Image />
        </ImageContainer>

        <InfoContainer>
          <Left>
            <ProfilePicture />
          </Left>
          <Right>
            <Title>
              test Lorem ipsum dolorrrrrr ss ss <br />
            </Title>
            <Channel>
              happy mealSD SDddd
              <br />
            </Channel>
          </Right>
        </InfoContainer>
      </Outer>
    </>
  );
};

export default LoadingCard;
