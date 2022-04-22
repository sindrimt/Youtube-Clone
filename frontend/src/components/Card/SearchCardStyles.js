import styled from "styled-components";

export const Outer = styled.div`
  z-index: -10;
  color: #fefefe;
  background-color: none;
  height: 222px;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const Information = styled.div`
  gap: 6px;
  padding-left: 15px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
`;
export const Profile = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 370px;
  object-fit: cover;
`;

export const ProfilePicture = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;
export const ProfileName = styled.span`
  margin-left: 6px;
  font-size: 12px;
  color: #aaaaaa;
`;

export const Title = styled.span`
  display: flex;
  font-size: 18px;
  color: white;
`;
export const Views = styled.span`
  color: #aaaaaa;
  font-size: 12px;
  &:after {
    content: "•";
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const Upload = styled.span`
  color: #aaaaaa;
  font-size: 12px;
`;
export const ViewsContainer = styled.div`
  display: flex;
`;

export const Duration = styled.div`
  z-index: 100;
  display: inline-block;
  position: absolute;
  align-items: center;
  border-radius: 1.5px;
  align-items: center;
  font-weight: bold;
  justify-content: center;
  font-size: 10px;
  padding: 2px 3px;
  height: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  right: 3px;
  bottom: 7px;
  color: white;
`;
