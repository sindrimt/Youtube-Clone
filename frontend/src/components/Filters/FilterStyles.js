import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  top: 55px;
  position: absolute;
  width: 83vw;
  height: 57px;
  background-color: rgba(33, 33, 33, 0.98);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-left: 240px;

  @media (max-width: 1000px) {
    margin-left: 0px;
    width: 100vw;
  }

  @media (max-width: 1330px) {
    margin-left: 70px;
    width: 94vw;
  }

  @media (max-width: 800px) {
    width: 100vw;
    margin-left: 0;
  }
`;

export const FilterContent = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 20px;
`;

export const Tag = styled.button`
  display: flex;
  color: white;
  white-space: nowrap;
  transition: 0.2s;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  padding-right: 12px;
  height: 34px;
  border-radius: 25px;
  border: 1px solid #4b4b4b;
  background-color: #373737;
  &:hover {
    background-color: #4d4d4d;
    cursor: pointer;
    transition: background-color 0.5s ease;
  }
  &:focus {
    background-color: #ffffff;
    color: #141414;
    text-decoration: none;
    outline: none;
  }
`;
