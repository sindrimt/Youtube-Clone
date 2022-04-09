import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-right: 90px;
  margin-top: 5px;
  column-gap: 1rem;
  row-gap: 0rem;
`;

export const Outer = styled.div`
  width: 80%;
  float: right;
  margin-right: 20px;
  @media (max-width: 1200px) {
    margin-right: 0;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const ContentGap = styled.div`
  margin-top: 5rem;
`;
