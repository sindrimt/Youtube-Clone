import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  background-color: rgba(33, 33, 33, 0.98);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  color: white;
`;

export const Logo = styled.div`
  z-index: 100;
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  margin-left: 100px;
  flex-direction: row;
  align-items: center;
`;
export const Div2 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
