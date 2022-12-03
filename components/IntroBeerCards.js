import styled from "styled-components";
import Light from "./Light";

const { motion, useScroll, useTransform } = require("framer-motion");

export default function IntroBeerCards({ lights }) {
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 2000], ["0%", "50%"]);

  return (
    <SIntroBeerCards id="SIntroBeerCards">
      <SCards style={{ y }} id="SCards">
        {lights.map((light) => (
          <Light key={light.attributes.handle} light={light} />
        ))}
      </SCards>
      <SGradient></SGradient>
    </SIntroBeerCards>
  );
}

const SIntroBeerCards = styled.div`
  margin-top: -50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 120vh;

  h1 {
    z-index: 2;
    position: absolute;
    color: white;
    transform: translate(0%, -100%);
    text-shadow: 0px 0px 5px #000000;
  }
`;

const SCards = styled(motion.div)`
  margin: 5rem;
  display: flex;
  z-index: 22;
`;

const SGradient = styled.div`
  position: absolute;
  top: 0;
  min-width: 100%;
  height: 20vh;
  z-index: 3;
  margin-top: 80vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
`;
