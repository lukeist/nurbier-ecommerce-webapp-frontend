import styled from "styled-components";
import { GiLaurelCrown } from "react-icons/gi";
import { useRef } from "react";
import Craft from "./IntroMid-CraftData";
const { motion, useScroll, useTransform } = require("framer-motion");

export default function IntroMid({ lights }) {
  const { scrollYProgress } = useScroll({});
  let ref = useRef(null);
  let y = useTransform(scrollYProgress, [1, 0], ["-100%", "100%"]);

  return (
    <SIntroMid ref={ref} id="SIntroMid">
      <STitle>
        <h1>NEUHEITEN</h1>
        <GiLaurelCrown />
        <p>
          Was haben eine verbrannte Pizza, gefrorenes Bier und eine schwangere
          Frau gemeinsam?
        </p>
        <p>Irgendein Dummer hat das Teil zu spät rausgenommen.</p>
      </STitle>

      <SCraftBeer0 id="UeberNurBier" className="SCraftBeer">
        <div>
          <SImgParallax
            className="craft-img"
            id="craft_00"
            src={Craft[0].image}
            alt={Craft[0].title}
            style={{ y }}
          />
        </div>
        <STxTParallax0 className="" style={{ y }}>
          <h1>{Craft[0].title}</h1>
          <h3>{Craft[0].abv}</h3>
          <p className="lh24">
            <span className="bold">Zutaten</span>: {Craft[0].ingredients}
          </p>
          <p className="lh24">
            <span className="bold">Bezeichnung</span>: {Craft[0].description}
          </p>
        </STxTParallax0>
      </SCraftBeer0>
      <SCraftBeer1 className="SCraftBeer">
        <STxTParallax1 className="" style={{ y }}>
          <h1>{Craft[1].title}</h1>
          <h3>{Craft[1].abv}</h3>
          <p className="lh24">
            <span className="bold">Zutaten</span>: {Craft[1].ingredients}
          </p>
          <p className="lh24">
            <span className="bold">Bezeichnung</span>: {Craft[1].description}
          </p>
        </STxTParallax1>
        <div>
          <SImgParallax
            className="craft-img absolute"
            id="craft_01"
            src={Craft[1].image}
            alt={Craft[1].title}
            style={{ y }}
          />
        </div>
      </SCraftBeer1>
    </SIntroMid>
  );
}

const SIntroMid = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .SCraftBeer {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;

    section {
      width: 40%;
      display: flex;
      flex-direction: column;
    }
  }

  .craft-img {
    max-height: 80vh;
  }

  h3 {
    margin: 2rem 0 1rem 0;
  }
`;

const STitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 768px;
  margin: 0 10%;

  > h1 {
    margin-top: 20rem;
    font-family: "Roboto Slab", serif;
  }

  > svg {
    font-size: 5rem;
    margin: 1rem 0;
  }
`;
const SCraftBeer0 = styled.div`
  z-index: 2;
  background: url(/parallax-bg-0.png) no-repeat top left;
  background-position: 25% 75%;

  > div {
    transform: rotate(-0.05turn);
    margin-left: -5rem;
  }
`;

const SCraftBeer1 = styled.div`
  z-index: 2;
  background: url(/parallax-bg-1.png) no-repeat top right;
  background-position: 85% 25%;

  > div {
    transform: rotate(0.05turn);
    margin-right: 20rem;
  }
`;

const SImgParallax = styled(motion.img)``;

const STxTParallax0 = styled(motion.section)`
  margin-bottom: -10rem;
`;
const STxTParallax1 = styled(motion.section)`
  margin-bottom: -40rem;
`;
