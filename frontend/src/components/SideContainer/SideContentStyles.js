import styled from "styled-components";

export const Sidebar = styled.div`
  height: 100vh;
  width: 230px;
  position: fixed;
  display: inline-block;
  top: 0;
  left: 0;
  background-color: rgba(33, 33, 33, 0.98);
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const SidebarSmall = styled.div`
  height: 100vh;
  width: 70px;
  position: fixed;
  display: inline-block;
  top: 0;
  left: 0;
  background-color: rgba(33, 33, 33, 0.98);
`;

export const Logo = styled.img`
  width: 95px;
  position: absolute;
  top: 18px;
  left: 70px;
`;
