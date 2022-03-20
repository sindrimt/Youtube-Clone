import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  padding-top: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
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
