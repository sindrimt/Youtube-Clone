import styled from "styled-components";

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  color: #3ea6ff;
  padding-left: 5px;
  width: 120px;
  height: 40px;
  background-color: transparent;
  border-radius: 1px;
  border: 1px solid #3ea6ff;
  &:hover {
    cursor: pointer;
  }
`;

export const ProfilePic = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  object-fit: contain;
  &:hover {
    cursor: pointer;
  }
`;
