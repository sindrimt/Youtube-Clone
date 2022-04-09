import styled from "styled-components";

export const Outer = styled.div`
  z-index: -10;

  color: #fefefe;
  background-color: none;
  height: 300px;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProfilePicture = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
`;

export const Channel = styled.span`
  color: #aaaaaa;
  position: relative;
  line-height: 17px;
  top: 5px;
  font-size: 12px;
`;
export const Views = styled.span`
  color: #aaaaaa;
  position: relative;
  font-size: 12px;
  &:after {
    content: "•";
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const Upload = styled.span`
  color: #aaaaaa;
  position: relative;
  font-size: 12px;
`;
export const Title = styled.span`
  font-size: 13.5px;
  line-height: 16px;
`;

export const Left = styled.div`
  grid-area: left;
  padding-top: 0.25rem;
  padding-right: 0.25rem;
`;

export const Right = styled.div`
  grid-area: right;
  padding: 0.5rem;
`;

export const InfoContainer = styled.div`
  color: #ffffff;
  font-size: 13px;
  font-weight: 100;
  display: grid;
  height: 200px;
  grid-template-rows: auto;
  grid-template-areas:
    "left right "
    "left right ";
  justify-content: start;
`;
