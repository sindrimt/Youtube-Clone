import styled from "styled-components";

export const Outer = styled.div`
  z-index: -10;
  color: #fefefe;
  background-color: none;
  height: 300px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Image = styled.div`
  width: 100%;
  height: 158px;
  background-color: #303030;
`;

export const ProfilePicture = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  margin-top: 4px;
  background-color: #303030;
`;

export const Channel = styled.span`
  position: relative;
  line-height: 20px;
  font-size: 14px;
  background-color: #303030;
  color: transparent;
  border-radius: 1px;
  top: 5px;
  width: 100px;
  height: 22px;
`;

export const Upload = styled.span`
  color: #aaaaaa;
  position: relative;
  font-size: 14px;
  color: transparent;
`;
export const Title = styled.span`
  line-height: 16px;
  font-size: 14px;
  border-radius: 1px;
  color: transparent;
  background-color: #303030;
  width: 100px;
  height: 20px;
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
