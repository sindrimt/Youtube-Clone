import styled from "styled-components";

export const Sidebar = styled.div`
  margin-top: 55px;
  height: calc(100% - 55px);
  width: 240px;
  position: fixed;
  overflow: hidden;
  display: inline-block;
  top: 0;
  left: 0;
  background-color: #212121;
  &:hover {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 16px;
    }

    ::-webkit-scrollbar-thumb {
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 9999px;
      background-color: #717171;
    }
  }

  /*  @media (max-width: 1330px) {
    height: 100vh;
    width: 72px;
    position: fixed;
    display: inline-block;
    top: 0;
    left: 0;
    background-color: rgba(33, 33, 33, 0.98);
  } */

  @media (max-width: 800px) {
    width: 0px;
  }
`;
export const SidebarSmall = styled.div`
  margin-top: 55px;
  height: 100vh;
  width: 72px;
  position: fixed;
  padding: 20px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  top: 0;
  left: 0;
  background-color: rgba(33, 33, 33, 0.98);

  @media (max-width: 800px) {
    display: none;
  }
`;

export const SubscribedSmall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 14px;
`;

export const Logo = styled.img`
  width: 90px;
  position: fixed;
  top: 16px;
  left: 72px;
  &:hover {
    cursor: pointer;
  }
`;

export const SubscribedOuter = styled.div`
  display: flex;
  padding: 20px 0px 20px 25px;
  flex-direction: column;
  align-items: inherit;
  width: 100%;
  gap: 18px;
`;

export const SubscribedOuter2 = styled.div`
  display: flex;
  padding: 20px 0px 25px 25px;
  flex-direction: column;
  align-items: inherit;
  width: 100%;
  gap: 18px;
  /*  @media (max-width: 1330px) {
    display: none;
  } */
`;

export const SubscribedOuter3 = styled.div`
  display: flex;
  padding: 25px 0px 15px 25px;
  flex-direction: column;
  align-items: inherit;
  width: 100%;
  gap: 18px;
  /*  @media (max-width: 1330px) {
    display: none;
  } */
`;

export const SubProfilePicture = styled.img`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  object-fit: cover;
`;

export const Subscribed = styled.div`
  position: relative;
  display: flex;
  color: white;
  font-size: 14px;
  align-items: center;
`;

export const Line = styled.div`
  margin-top: 0px;
  width: 222px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  /* @media (max-width: 1330px) {
    display: none;
  } */
`;

export const LoginContainer = styled.div`
  width: 100%;
  padding-bottom: 15px;
`;
export const LoginText = styled.div`
  padding: 20px 0px 10px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
`;
export const LoginButton = styled.div`
  display: flex;
  margin-left: 32px;
`;
