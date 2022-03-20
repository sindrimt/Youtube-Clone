import styled from "styled-components";

export const Outer = styled.div`
  width: 300px;
  height: 300px;
  color: #fefefe;
  background-color: none;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 180px;

  object-fit: cover;
`;

export const ProfilePicture = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background: lightgrey;
`;

export const Channel = styled.span`
  color: #aaaaaa;
  font-size: 13px;
  line-height: 27px;
`;

export const Left = styled.div`
  grid-area: left;
  padding: 0.25rem;
`;

export const Right = styled.div`
  grid-area: right;
  padding: 0.25rem;
`;

export const InfoContainer = styled.div`
  font-size: 15px;
  font-weight: 100;
  display: grid;
  height: 200px;
  grid-template-rows: 0.2fr 0.2fr 0.2fr;
  grid-template-areas:
    "left right "
    "left right ";
`;
