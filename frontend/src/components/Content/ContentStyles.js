import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 5px;
  margin-right: 10px;
  column-gap: 1rem;
  row-gap: 0rem;
  padding-top: 5rem;
`;

export const Outer = styled.div`
  width: 80%;
  float: right;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 1200px) {
    padding-right: 10px;
    padding-left: 10px;
  }
  @media (max-width: 1150px) {
    padding-right: 10px;
    padding-left: 50px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    padding-right: 0px;
    padding-left: 10px;
  }
  @media (max-width: 550px) {
    width: 100%;
    padding-right: 80px;
    padding-left: 80px;
  }
`;

export const ContentGap = styled.div`
  margin-top: 5rem;
`;
