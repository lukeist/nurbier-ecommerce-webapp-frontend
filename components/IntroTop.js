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
      <STopText id="STopText" className="absolute">
        <div>
          <ul id="STopText-name">
            <li>Die feine Hefeweisse</li>
            <li>Magie und schwarze Seele</li>
            <li>Der traditionelle Urtyp</li>
            <li>Der Durstlöscher</li>
            <li>Die kristallklare Weisse</li>
            <li>Helle Weisse</li>
          </ul>
          <ul id="STopText-price">
            <li>3.90€</li>
            <li>4.90€</li>
            <li>3.90€</li>
            <li>2.90€</li>
            <li>3.10€</li>
            <li>5.10€</li>
          </ul>
        </div>
        <h1>cold, smooth & tasty.</h1>
      </STopText>
      {/* 
      <SCards id="SCards">
        {lights.map((light) => (
          <Light key={light.attributes.handle} light={light} />
        ))}
      </SCards> */}

      {/* {is16 && <PopUp16 is16={is16} setIs16={setIs16} />} */}

      <SGradientAni></SGradientAni>

      <SVideo style={{ y }} id="SVideo" autoPlay loop muted>
        <source src={"/intro.mp4"} type="video/mp4" />
      </SVideo>
    </SIntroTop>
  );
}

const SIntroTop = styled(motion.div)`
  position: relative;
  overflow: hidden;
  background: black;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// const SCards = styled.div`
//   display: none;
//   z-index: 22;
// `;
const STopText = styled.div`
  z-index: 10;

  width: 70%;
  display: flex;
  justify-content: flex-end;

  div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  ul {
    font-size: 2rem;
    font-family: "Roboto Slab", serif;
    opacity: 0.9;
    list-style-type: none;
    line-height: 1.6;
  }

  #STopText-price {
    text-align: right;
  }

  li {
    margin: 0 2rem;
  }

  h1 {
    font-family: "League Spartan", sans-serif;
    font-weight: 900;
    font-size: 12.5rem;
    max-width: 40rem;
    line-height: 0.85;
    letter-spacing: -5px;
    color: white;
    margin-bottom: -2rem;
  }
`;
const SGradientAni = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  height: 100vh;
  z-index: 2;
  opacity: 0.9999999;

  background-image: linear-gradient(45deg, #000d09, #000000, #100000),
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  background-size: 100% 100%;

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

const SVideo = styled(motion.video)`
  position: absolute;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;

  //   z-indexKP0-O=-POLIK8JUKHJYHTG87F6D5SDA4S3a3wq : 2;
`;
