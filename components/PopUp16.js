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
  // width: 100%;
  background: black;
  //   height: 80vh;

  //   top: 40vh;

  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  z-index: 1000;

  > h3 {
    color: black;
    z-index: 1001;
    margin-bottom: 2rem;
  }

  button {
    margin: 0 0.5rem;
    background: black;
    border: none;
    outline: none;
    padding: 1rem;
    cursor: pointer;
    transition: all ease 0.3s;
    text-decoration: none;
    &:hover {
      background: rgba(0, 0, 0, 0.9);
    }
  }
`;
