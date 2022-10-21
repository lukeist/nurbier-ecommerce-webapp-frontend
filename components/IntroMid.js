import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { SMainBtn } from "../styles/SMainBtn";
import Light from "./Light";
import PopUp16 from "./PopUp16";
import { useState } from "react";

export default function IntroMid({ lights }) {
  const [is16, setIs16] = useState(true);
  return (
    <SIntroMid id="SIntroMid">
      {/* <SImgBG id="sdetails-img">
        <img src="/1.jpg" alt="Party" />
      </SImgBG> */}
      <div>
        <SIntroMidTxt>
          <h2>Welcome!</h2>
          <h2>MAKING THE BEST BEER POSSIBLE</h2>
          <p>
            Beciegast nveriti vitaesaert asety kertya aset aplicaboserde nerorem
            asipsumod itaut. Monsequntur magni dolores eonqui ratione voluptate
            msequise kertyias nesciunt, neque porro quisquam seridolore
            nuyfasas. Vertyu erauas aitaesa ertyasneo eniptaiades.
          </p>
        </SIntroMidTxt>
        <SImgFloating id="SImgFloating">
          <img src="/Floating.png" alt="Party" />
        </SImgFloating>
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

const SIntroMidTxt = styled.div`
  margin-top: 15rem;
  margin-right: 5rem;
  width: 40%;
`;
const SImgFloating = styled.div`
  margin-right: -40rem;
  // position: absolute;
  // max-width: 100%;
  // height: auto;

  // height: 300px;
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
