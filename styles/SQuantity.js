import styled from "styled-components";

export const SQuantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
    padding: 0rem 0.5rem;
  }

  p {
    width: 2.5rem;
    font-size: 2rem;
    text-align: center;
  }

  span {
    font-size: 2rem;
    color: var(--secondary);
    text-align: center;
  }

  svg {
    color: white;
    cursor: pointer;
    opacity: 0.5;
    transition: all ease 0.3s;
    font-size: 3rem;

    &:hover {
      opacity: 1;
    }
  }
`;
