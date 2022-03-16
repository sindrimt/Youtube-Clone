import React from "react";
import axios from "axios";
import styled from "styled-components";

import { Outer, ImageContainer } from "./CardStyles";

type Props = {
  title: string;
  image: string | any;
};

const Card: React.FC<Props> = ({ title, image }) => {
  return (
    <>
      <Outer>
        <ImageContainer>
          <img src={image.url} alt="Image" />
        </ImageContainer>
        {title}
      </Outer>
    </>
  );
};

export default Card;
