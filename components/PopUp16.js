import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { SMainBtn } from "../styles/SMainBtn";
import Light from "./Light";

export default function PopUp16({ setIs16 }) {
  return (
    <SPopUp16 id="SPopUp16">
      <h3>Bist du denn überhaupt schon 16 Jahre Alt?</h3>
      <div>
        <button>Noch Nicht.</button>
        <button onClick={() => setIs16(false)}>Jo, Locker!</button>
      </div>
    </SPopUp16>
  );
}

const SPopUp16 = styled.div`
  font-family: "Oswald", sans-serif;

  position: fixed;
  overflow: hidden;
  background: black;

  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem;
  z-index: 1000;

  > h3 {
    color: white;
    z-index: 1001;
    margin-bottom: 2rem;
    font-size: 4rem;
  }

  button {
    color: white;
    background: black;
    border: 2px solid white;
    margin: 0 0.5rem;
    outline: none;
    padding: 1rem;
    cursor: pointer;
    transition: all ease 0.3s;
    text-decoration: none;
    font-size: 2rem;
    &:hover {
      color: black;
      background: white;
      border: 2px solid black;
    }
  }
`;
