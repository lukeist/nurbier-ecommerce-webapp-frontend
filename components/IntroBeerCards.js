import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { SMainBtn } from "../styles/SMainBtn";
import Light from "./Light";
import PopUp16 from "./PopUp16";
import { useState } from "react";
const { motion, useScroll, useTransform } = require("framer-motion");

export default function IntroBeerCards({ lights }) {
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 1000], ["0%", "50%"]);

  return (
    <SIntroBeerCards id="SIntroBeerCards">
      {/* <SGradient></SGradient> */}
      {/* <SGradient></SGradient> */}
      <SCards style={{ y }} id="SCards">
        {lights.map((light) => (
          <Light key={light.attributes.handle} light={light} />
        ))}
      </SCards>
    </SIntroBeerCards>
  );
}

const SIntroBeerCards = styled.div`
  margin-top: -40rem;
  margin-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100vh;

  h1 {
    z-index: 2;
    position: absolute;
    color: white;
    transform: translate(0%, -100%);
    text-shadow: 0px 0px 5px #000000;
  }
`;

const SCards = styled(motion.div)`
  //   position: absolute;
  margin: 5rem;
  display: flex;
  // margin-bottom: -20rem;
  z-index: 22;
`;
const SGradient = styled.div`
  // content: " ";
  position: absolute;
  bottom: 0;
  right: 0;
  min-width: 100%;
  // min-height: 100%;
  height: 20vh;
  z-index: 1000;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
`;
