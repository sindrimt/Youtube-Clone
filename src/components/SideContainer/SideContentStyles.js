import styled from "styled-components";

export const Sidebar = styled.div`
  height: 100vh;
  width: 220px;
  position: fixed;
  display: inline-block;
  top: 0;
  left: 0;
  background-color: rgba(33, 33, 33, 0.98);
  @media (max-width: 1000px) {
    display: none;
  }
`;
