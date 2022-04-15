import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  margin-right: 10px;
  column-gap: 1rem;
  row-gap: 0rem;
  padding-top: 7.7rem;
`;

export const Outer = styled.div`
  float: right;
  padding-left: 250px;
  padding-right: 10px;

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
