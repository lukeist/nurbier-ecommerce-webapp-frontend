import styled from "styled-components";

export const SMainBtn = styled.button`
  background: var(--beer);
  color: black;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background: gold;
    // background: black;
    // color: white;
  }
`;
