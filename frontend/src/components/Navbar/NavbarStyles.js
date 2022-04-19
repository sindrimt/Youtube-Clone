import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 55px;
  background-color: rgba(33, 33, 33, 0.98);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  color: white;
`;

export const Div2 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 20px;
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

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  color: #3ea6ff;
  width: 110px;
  height: 40px;
  background-color: transparent;
  border-radius: 1px;
  border: 1px solid #3ea6ff;
  &:hover {
    cursor: pointer;
  }
`;
