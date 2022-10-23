import { useState } from "react";
import { BsPiggyBank, BsBuilding } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import styled from "styled-components";
const { motion, useScroll, Variants } = require("framer-motion");

export default function IntroBottom({}) {
  return (
    <SIntroBottom>
      <SGradient></SGradient>

      <SIntroBText>
        <motion.h1>Im dunkeln zur Arbeit und im dunkeln nach Hause.</motion.h1>
        <motion.h3>
          Letzte Woche waren tagsüber 23°C. Die Leute rennen trotzdem mit Jacke
          rum. Früh, bei 12°C, kam mir einer mit Handschuhen entgegen. Entweder
          gab es Massenflucht aus der Irrenanstalt oder die Leute denken sich
          wirklich "oh, Oktober, dann MUSS ich jetzt Jacke tragen!"
        </motion.h3>
        {/* <h1>Here's how:</h1> */}
      </SIntroBText>
    </SIntroBottom>
  );
}

const SIntroBottom = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-top: -1rem;

  span {
    color: var(--highlight);
  }

  background: url(../nur-bier-intro-bottom-bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const SIntroBText = styled.div`
  //   background: rgba(0, 0, 0, 0.9);
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6rem;

  h1 {
    width: 768px;
    padding: 2rem 0;
  }

  h3 {
    max-width: 768px;
    color: var(--third);
  }

  opacity: 0.95;
  background: linear-gradient(38deg, #0b0000, #000000, #000a0b);
  background-size: 100% 100%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
}

@-webkit-keyframes AnimationName {
  0%{background-position:90% 0%}
  50%{background-position:11% 100%}
  100%{background-position:90% 0%}
}
@-moz-keyframes AnimationName {
  0%{background-position:90% 0%}
  50%{background-position:11% 100%}
  100%{background-position:90% 0%}
}
@keyframes AnimationName {
  0%{background-position:90% 0%}
  50%{background-position:11% 100%}
  100%{background-position:90% 0%}
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

const S3Points = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -7rem 0;

  div {
    background: white;
    padding: 2rem;
    margin: 1rem 2rem;
    border-radius: 1rem;
    max-width: 768px;
    transition: all ease 0.3s;
    box-shadow: var(--boxshadow01);

    &:hover {
      box-shadow: none;
    }
  }

  svg {
    font-size: 2rem;
    font-weight: 100;
  }
`;

const S3Point = styled(motion.div)``;
