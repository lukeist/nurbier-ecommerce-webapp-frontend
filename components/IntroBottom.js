import { useState } from "react";
import { BsPiggyBank, BsBuilding } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import styled from "styled-components";
const { motion, useScroll, useTransform } = require("framer-motion");

export default function IntroBottom({}) {
  const { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["-300%", "-0%"]);
  return (
    <SIntroBottom>
      <SGradient></SGradient>

      <STestimony>
        <motion.div className="absolute" style={{ y }}>
          <h1>Was unsere Kunden über uns sagen:</h1>

          {/* <h1>Here's how:</h1> */}
        </motion.div>
        <STUsers>
          <h1>Was unsere Kunden über uns sagen:</h1>

          <p className="italic">
            "Die Ägypter haben das Bier erfunden. Die haben ja auch diese
            riesigen Bierkeller gebaut, die Bieramiden.Der Mann, der im Dorf das
            meiste Bier trinkt, ist der Biergermeister. Wer sein Bier bar
            bezahlt, ist ein Barbier. Und wer sein Bier auf Raten zahlt, ist ein
            Bierrat."
          </p>
          {/* <img src="/1.jpg" alt="Party" /> */}

          <SImgUser src="/user6.jpg" alt="user1" />
          <p>Lena Weber</p>
        </STUsers>
      </STestimony>

      <SSocial id="Kontakt" className="absolute">
        <div>
          <TiSocialFacebook />
        </div>
        <div>
          <AiOutlineInstagram />
        </div>
      </SSocial>
    </SIntroBottom>
  );
}

const SIntroBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 100vh;
  //   margin-top: 20vh;

  span {
    color: var(--highlight);
  }

  background: url(../nur-bier-intro-bottom-bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const STestimony = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    max-width: 768px;
    margin: 4rem 0;
    font-family: "Roboto Slab", serif;
  }

  opacity: 0.95;
  background: linear-gradient(38deg, #0b0000, #000000, #000a0b);
  background-size: 100% 100%;

  //   -webkit-animation: AnimationName 30s ease infinite;
  //   -moz-animation: AnimationName 30s ease infinite;
  //   animation: AnimationName 30s ease infinite;
  // }

  // @-webkit-keyframes AnimationName {
  //   0%{background-position:90% 0%}
  //   50%{background-position:11% 100%}
  //   100%{background-position:90% 0%}
  // }
  // @-moz-keyframes AnimationName {
  //   0%{background-position:90% 0%}
  //   50%{background-position:11% 100%}
  //   100%{background-position:90% 0%}
  // }
  // @keyframes AnimationName {
  //   0%{background-position:90% 0%}
  //   50%{background-position:11% 100%}
  //   100%{background-position:90% 0%}

  > div {
    margin-bottom: 20vh;
  }
`;

const STUsers = styled.div`
  margin-top: 20rem;
  > h1 {
    max-width: 768px;
    font-family: "Roboto Slab", serif;
    color: transparent;
    text-shadow: 0 0 5px rgba(0, 100, 100, 0.2);
  }

  p {
    padding: 0 2rem;
    max-width: 768px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 100;
  }

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-top: 2rem;
  }
`;

const SImgUser = styled.img``;

const SGradient = styled.div`
  position: absolute;
  min-width: 100%;
  height: 20vh;
  z-index: 3;
  margin-bottom: 80vh;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const SSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 85vh;

  > div {
    background: rgba(255, 255, 255, 0.3);
    margin: 0.5rem;
    transition: all ease 0.3s;
    border-radius: 0.5rem;

    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }
  svg {
    color: black;
    border-radius: 50%;
    transition: all ease 0.3s;
    cursor: pointer;
    z-index: 100;
    font-size: 2.5rem;
  }
`;
