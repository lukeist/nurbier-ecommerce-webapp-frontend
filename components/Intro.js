import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { SMainBtn } from "../styles/SMainBtn";

export default function Intro({}) {
  return (
    <SIntro>
      <h1>
        Institutional-grade Australian real estate assets managed by
        blockchain-based smart contracts.
      </h1>
      <SSearch action="">
        <input placeholder="Search Assets" type="text" />

        <BsSearch />
      </SSearch>
      <SVideo autoPlay loop muted>
        <source src={"/intro.mp4"} type="video/mp4" />
      </SVideo>
      <SIntroSub>
        <h2>Real assets. No middlemen. More trust.</h2>
        <SMainBtn>Join the Early Access List</SMainBtn>
      </SIntroSub>
    </SIntro>
  );
}

const SIntro = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    z-index: 2;
    position: absolute;
    color: white;
    width: 40rem;
    transform: translate(0%, -100%);
    text-shadow: 0px 0px 5px #000000;
  }
`;

const SVideo = styled.video`
  position: absolute;
  right: 0;
  top: -10rem;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
  //   z-indexKP0-O=-POLIK8JUKHJYHTG87F6D5SDA4S3a3wq : 2;
`;

const SSearch = styled.form`
  background: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  width: 40rem;
  max-width: 80%;
  z-index: 10;

  svg {
    font-size: 1.4rem;
    color: var(--third);
    margin-right: 1rem;
  }

  input {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background: transparent;
    width: 100%;
    font-size: 1.4rem;
    padding: 0 2rem 0 1rem;
    padding-right: 2rem;
    margin: 1rem 0rem;
    border: none;
    border-radius: 0.3rem;
    color: var(--third);
  }

  input:hover {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background: $color-dark-hover;
    border: none;
    outline: none;
    // box-shadow: inset 0 0 0 1px $color-dark-hover;
  }

  input:focus {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-appearance: none;

    background: rgba(255, 255, 255, 0.8);
    border: none;
    outline: none;
    // box-shadow: inset 0 0 0 1px $color-dark-outline;
  }
`;

const SIntroSub = styled.div`
  background: #f1f1f1;
  width: 100%;
  position: absolute;
  top: 70%;
  height: 30vh;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    padding: 2rem;
    font-size: 2rem;
    color: var(--secondary);
  }
`;
