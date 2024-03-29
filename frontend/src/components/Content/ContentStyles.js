import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  margin-right: 10px;
  column-gap: 1rem;
  row-gap: 0rem;
  padding-top: 8.1rem;
`;
export const GridContainerSearch = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  column-gap: 1rem;
  padding-top: 5.2rem;
`;

export const Outer = styled.div`
  float: right;
  padding-left: 260px;
  padding-right: 10px;

  @media (min-width: 1530px) {
    width: 100%;
  }
  @media (max-width: 1330px) {
    padding-left: 85px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    padding-left: 85px;
  }
  @media (max-width: 800px) {
    padding-left: 20px;
    padding-right: 10px;
  }
  @media (max-width: 550px) {
    width: 100%;
    padding-right: 60px;
    padding-left: 60px;
  }
`;
export const OuterSearch = styled.div`
  float: right;
  width: 100%;
  padding-left: 283px;
  padding-right: 10px;

  @media (min-width: 1530px) {
    width: 100%;
  }
  @media (max-width: 1330px) {
    padding-left: 120px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    padding-left: 90px;
  }
  @media (max-width: 800px) {
    padding-left: 20px;
    padding-right: 10px;
  }
  @media (max-width: 550px) {
    width: 100%;
    padding-right: 60px;
    padding-left: 60px;
  }
`;

export const LoadingOuter = styled.div`
  width: 100%;
  float: right;
  padding-left: 260px;
  padding-right: 10px;

  @media (max-width: 1330px) {
    padding-left: 85px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    padding-left: 85px;
  }
  @media (max-width: 800px) {
    padding-left: 20px;
    padding-right: 10px;
  }
  @media (max-width: 550px) {
    width: 100%;
    padding-right: 60px;
    padding-left: 60px;
  }
`;

export const ContentGap = styled.div`
  margin-top: 5rem;
`;
