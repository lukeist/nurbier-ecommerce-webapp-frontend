import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { SMainBtn } from "../styles/SMainBtn";
import Light from "./Light";
import PopUp16 from "./PopUp16";
import { useRef, useState } from "react";
const { motion, useScroll, useTransform } = require("framer-motion");

export default function IntroMid({ lights }) {
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "end start"],
  });
  let ref = useRef(null);
  let width = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  let widthL = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <SIntroMid ref={ref} id="SIntroMid">
      {/* <SImgBG id="sdetails-img">
        <img src="/1.jpg" alt="Party" />
      </SImgBG> */}
      <div>
        <SIntroMidTxt style={{ y }}>
          <h2>Welcome!</h2>
          <h2>MAKING THE BEST BEER POSSIBLE</h2>
          <p>
            Beciegast nveriti vitaesaert asety kertya aset aplicaboserde nerorem
            asipsumod itaut. Monsequntur magni dolores eonqui ratione voluptate
            msequise kertyias nesciunt, neque porro quisquam seridolore
            nuyfasas. Vertyu erauas aitaesa ertyasneo eniptaiades.
          </p>
        </SIntroMidTxt>
        <SImgFloating style={{ width }}>
          <img src="/Floating.png" alt="Party" />
        </SImgFloating>
        {/* <SImgFloatingL style={{ widthL }}>
          <img src="/Floating.png" alt="Party" />
        </SImgFloatingL> */}
      </div>
    </SIntroMid>
  );
}

const SIntroMid = styled.div`
  position: relative;
  margin-top: 20rem;

  > div {
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 80vh;
  }
  // width: 100%;
  // margin-top: -10vh;
`;

const SImgBG = styled.div``;

const SIntroMidTxt = styled(motion.div)`
  position: absolute;
  margin-top: 15rem;
  margin-right: 5rem;
  width: 40%;
`;
const SImgFloating = styled(motion.div)`
  position: absolute;
  right: 0;
  overflow: hidden;
  margin-left: -140rem;

  animation-name: Floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes Floating {
    0% {
      transform: translate(0px, 0px);
    }
    65% {
      transform: translate(0px, 15px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`;

const SImgFloatingL = styled(motion.div)`
  position: absolute;
  // left: 0;
  overflow: hidden;

  animation-name: Floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes Floating {
    0% {
      transform: translate(0px, 0px);
    }
    65% {
      transform: translate(0px, 15px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  img {
    transform: scaleX(-1);
  }
`;
