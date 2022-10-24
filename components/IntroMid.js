import styled from "styled-components";
import { GiLaurelCrown } from "react-icons/gi";
import { SMainBtn } from "../styles/SMainBtn";
import Light from "./Light";
import PopUp16 from "./PopUp16";
import { useRef, useState } from "react";
import Craft from "./IntroMid-CraftData";
const { motion, useScroll, useTransform } = require("framer-motion");

export default function IntroMid({ lights }) {
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    // offset: ["end end", "end start"],
  });
  let ref = useRef(null);
  let y = useTransform(scrollYProgress, [1, 0], ["-100%", "100%"]);
  let yy = useTransform(scrollY, [0, 500], ["-50%", "50%"]);

  // let width = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // let widthL = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <SIntroMid ref={ref} id="SIntroMid">
      <h1>NEUHEITEN</h1>
      <GiLaurelCrown />
      <p>
        Biersorten und Verbreitung in DeutschlandBearbeiten · Pils: Das Bier,
        auch Pilsener oder Pilsner, ist ein nach Pilsner Brauart untergärig
        gebrautes Bier.
      </p>
      <p>Also ich fande gut dass du flüssich und frei vorgetragen hast.</p>
      {/* <SImgBG id="sdetails-img">
        <img src="/1.jpg" alt="Party" />
      </SImgBG> */}
      {/* <div>
        <SIntroMidTxt style={{ a }}>
          <h2>Welcome!</h2>
          <h2>MAKING THE BEST BEER POSSIBLE</h2>
          <p className="lh24">
            Beciegast nveriti vitaesaert asety kertya aset aplicaboserde nerorem
            asipsumod itaut. Monsequntur magni dolores eonqui ratione voluptate
            msequise kertyias nesciunt, neque porro quisquam seridolore
            nuyfasas. Vertyu erauas aitaesa ertyasneo eniptaiades.
          </p>
        </SIntroMidTxt>
        <SImgFloating style={{ width }}>
          <img src="/Floating.png" alt="Party" />
        </SImgFloating>
        <SImgFloatingL style={{ widthL }}>
          <img src="/Floating.png" alt="Party" />
        </SImgFloatingL>
      </div> */}
      <SCraftBeer0 className="SCraftBeer">
        <div>
          <SImgParallax
            className="craft-img"
            id="craft_00"
            src={Craft[0].image}
            alt={Craft[1].title}
            style={{ y }}
          />
        </div>
        {/* <SImgBG0 src={Craft[0].imageBG} alt="Party" /> */}
        <STxTParallax0 className="" style={{ y }}>
          <h1>{Craft[0].title}</h1>
          <h3>{Craft[0].abv}</h3>
          <p className="lh24">
            <span className="bold">Ingredients</span>: {Craft[0].ingredients}
          </p>
          <p className="lh24">
            <span className="bold">Description</span>: {Craft[0].description}
          </p>
        </STxTParallax0>
      </SCraftBeer0>
      <SCraftBeer1 className="SCraftBeer">
        {/* <SImgBG1 src={Craft[1].imageBG} alt="Party" /> */}
        <STxTParallax1 className="" style={{ y }}>
          <h1>{Craft[1].title}</h1>
          <h3>{Craft[1].abv}</h3>
          <p className="lh24">
            <span className="bold">Ingredients</span>: {Craft[1].ingredients}
          </p>
          <p className="lh24">
            <span className="bold">Description</span>: {Craft[1].description}
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
      // height: 100vh;
      width: 40%;
      display: flex;
      flex-direction: column;
    }
  }

  .craft-img {
    max-height: 80vh;
  }

  > h1 {
    margin-top: 20rem;
    font-family: "Roboto Slab", serif;
  }
  > svg {
    font-size: 5rem;
    margin: 1rem 0;
  }
  h3 {
    margin: 2rem 0 1rem 0;
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
  margin-bottom: -20rem;
`;
const STxTParallax1 = styled(motion.section)`
  margin-bottom: -40rem;
`;

// const SIntroMidTxt = styled(motion.div)`
//   position: absolute;
//   margin-top: 15rem;
//   margin-right: 5rem;
//   width: 40%;
// `;
// const SImgFloating = styled(motion.div)`
//   position: absolute;
//   right: 0;
//   overflow: hidden;
//   margin-left: -140rem;

//   animation-name: Floating;
//   animation-duration: 3s;
//   animation-iteration-count: infinite;
//   animation-timing-function: ease-in-out;

//   @keyframes Floating {
//     0% {
//       transform: translate(0px, 0px);
//     }
//     65% {
//       transform: translate(0px, 15px);
//     }
//     100% {
//       transform: translate(0px, 0px);
//     }
//   }
// `;

// const SImgFloatingL = styled(motion.div)`
//   position: absolute;
//   // left: 0;
//   overflow: hidden;

//   animation-name: Floating;
//   animation-duration: 3s;
//   animation-iteration-count: infinite;
//   animation-timing-function: ease-in-out;

//   @keyframes Floating {
//     0% {
//       transform: translate(0px, 0px);
//     }
//     65% {
//       transform: translate(0px, 15px);
//     }
//     100% {
//       transform: translate(0px, 0px);
//     }
//   }

//   img {
//     transform: scaleX(-1);
//   }
// `;
