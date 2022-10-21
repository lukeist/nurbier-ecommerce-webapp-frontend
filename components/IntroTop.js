import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { SMainBtn } from "../styles/SMainBtn";
import Light from "./Light";
import PopUp16 from "./PopUp16";
import { useState } from "react";

export default function IntroTop({ lights }) {
  const [is16, setIs16] = useState(true);
  return (
    <SIntroTop id="SIntroTop">
      {/* <div>
        <h1>cold, smooth & tasty.</h1>
      </div> */}

      <SCards id="SCards">
        {lights.map((light) => (
          <Light key={light.attributes.handle} light={light} />
        ))}
      </SCards>

      {/* <h1>BILD</h1> */}
      {is16 && <PopUp16 is16={is16} setIs16={setIs16} />}

      <SGradient></SGradient>
      <SGradient></SGradient>

      <SVideo id="SVideo" autoPlay loop muted>
        <source src={"/intro.mp4"} type="video/mp4" />
      </SVideo>
    </SIntroTop>
  );
}

const SIntroTop = styled.div`
  position: relative;
  overflow: hidden;
  background: black;
  height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 8rem;
    max-width: 30rem;
    line-height: 1;
    letter-spacing: -3px;

    z-index: 2;
    position: absolute;
    color: white;
    transform: translate(0%, -100%);
    text-shadow: 0px 0px 5px #000000;
  }
`;

const SCards = styled.div`
  display: none;
  // margin-bottom: -20rem;
  z-index: 22;
`;

const SGradient = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  min-width: 100%;
  // min-height: 100%;
  height: 200px;
  z-index: 2;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
`;
const SVideo = styled.video`
  position: absolute;
  margin: 20rem 0;
  right: 0;
  top: -40rem;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
  //   z-indexKP0-O=-POLIK8JUKHJYHTG87F6D5SDA4S3a3wq : 2;
`;

const SIntroTopSub = styled.div`
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
