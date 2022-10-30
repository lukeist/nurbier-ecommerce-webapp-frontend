import styled from "styled-components";

export const SMainBtn = styled.button`
  cursor: pointer;
  background: black;
  color: white;
  border: solid 2px white;
  padding: 0 2rem;
  z-index: 2;
  height: 4rem;

  &:hover {
    background: white;
    color: black;
    border: solid 2px black;
  }
`;
