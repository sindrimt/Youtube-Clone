import React from "react";
import axios from "axios";
import styled from "styled-components";

import { Outer, ImageContainer, Image, ProfilePicture, Right, Left, InfoContainer, Channel } from "./CardStyles";

import "./CardStyles";

type Props = {
  title?: String;
  imageId: String | any;
  channel: String;
  imageRes: String;
};

const Card: React.FC<Props> = ({ title, imageId, channel, imageRes }) => {
  return (
    <>
      <Outer>
        <ImageContainer>
          <Image src={`https://i.ytimg.com/vi/${imageId}/${imageRes}.jpg`} alt="Image" />
        </ImageContainer>

        <InfoContainer>
          <Left>
            <ProfilePicture />
          </Left>
          <Right>
            {title} <br /> <Channel>{channel}</Channel>
          </Right>
        </InfoContainer>
      </Outer>
    </>
  );
};

export default Card;
