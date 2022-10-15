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
    width: 1rem;
    text-align: center;
  }

  span {
    color: var(--secondary);
  }

  svg {
    color: #494949;
  }
`;
