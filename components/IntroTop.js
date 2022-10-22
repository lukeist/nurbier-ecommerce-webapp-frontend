import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { SMainBtn } from "../styles/SMainBtn";
import Light from "./Light";
import PopUp16 from "./PopUp16";
import { useRef, useState } from "react";
const { motion, useScroll, useTransform } = require("framer-motion");

export default function IntroTop({ lights }) {
  let ref = useRef(null);
  // let { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 1000], ["0%", "50%"]);
  const [is16, setIs16] = useState(true);

  return (
    <SIntroTop ref={ref} id="SIntroTop">
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
      {/* <SGradientAni></SGradientAni> */}

      <SVideo style={{ y }} id="SVideo" autoPlay loop muted>
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
    font-size: 10rem;
    font-weight: 700;
    max-width: 40rem;
    line-height: 0.8;
    letter-spacing: -5px;

    z-index: 2;
    position: absolute;
    color: white;
  }
`;

const SCards = styled.div`
  display: none;
  // margin-bottom: -20rem;
  z-index: 22;
`;

const SGradientAni = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  min-width: 100%;
  height: 100vh;
  z-index: 2;
  opacity: 0.9999999;

  background: linear-gradient(45deg, #1a1600, #000000, #1e0000);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 99%;
    }
    50% {
      background-position: 100% 2%;
    }
    100% {
      background-position: 0% 99%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 99%;
    }
    50% {
      background-position: 100% 2%;
    }
    100% {
      background-position: 0% 99%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 99%;
    }
    50% {
      background-position: 100% 2%;
    }
    100% {
      background-position: 0% 99%;
    }
  }
`;
const SGradient = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  min-width: 100%;
  // min-height: 100%;
  height: 200px;
  z-index: 3;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
`;
const SVideo = styled(motion.video)`
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
