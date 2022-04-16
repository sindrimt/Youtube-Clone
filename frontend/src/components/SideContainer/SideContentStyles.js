import styled from "styled-components";

export const Sidebar = styled.div`
  height: 100vh;
  width: 240px;
  position: fixed;
  display: inline-block;
  top: 0;
  left: 0;
  background-color: rgba(33, 33, 33, 0.98);

  @media (max-width: 1330px) {
    height: 100vh;
    width: 70px;
    position: fixed;
    display: inline-block;
    top: 0;
    left: 0;
    background-color: rgba(33, 33, 33, 0.98);
  }
  @media (max-width: 800px) {
    width: 0px;
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
  width: 90px;
  position: absolute;
  top: 16px;
  left: 72px;
  &:hover {
    cursor: pointer;
  }
`;

export const SubscribedOuter = styled.div`
  display: flex;
  padding: 25px;
  margin-top: 52px;
  flex-direction: column;
  align-items: inherit;
  width: 100%;
  gap: 20px;
  @media (max-width: 1330px) {
    display: none;
  }
`;

export const Subscribed = styled.div`
  position: relative;
  display: flex;
  color: white;
  font-size: 14px;
  align-items: center;
  &:nth-child(1) {
    background-color: #303030;
  }
`;

export const Line = styled.div`
  margin-top: 10px;
  width: 92%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  @media (max-width: 1330px) {
    display: none;
  }
`;
