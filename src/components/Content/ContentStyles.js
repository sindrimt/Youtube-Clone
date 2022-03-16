import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 2rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
`;

export const ContentGap = styled.div`
  margin-top: 5rem;
`;
