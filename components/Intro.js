import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { SMainBtn } from "../styles/SMainBtn";
import Light from "./Light";

export default function Intro({ lights }) {
  return (
    <SIntro>
      <SCards>
        {lights.map((light) => (
          <Light key={light.attributes.handle} light={light} />
        ))}
      </SCards>

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
  height: 80vh;

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

const SCards = styled.div`
  display: flex;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  // grid-gap: 1rem;
`;

const SVideo = styled.video`
  position: absolute;
  right: 0;
  top: -20rem;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
  //   z-indexKP0-O=-POLIK8JUKHJYHTG87F6D5SDA4S3a3wq : 2;
`;

const SIntroSub = styled.div`
  position: absolute;
  width: 100%;
  top: 85%;
  height: 30vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    padding: 2rem;
    font-size: 2rem;
    color: var(--secondary);
  }
`;
