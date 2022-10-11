import Image from "next/image";
import styled from "styled-components";

export default function Tokens({}) {
  return (
    <STokens>
      <SVideo autoPlay loop muted>
        <source src={"/tokens.mp4"} type="video/mp4" />
      </SVideo>

      <div>
        <Image
          alt="Sucuro Asset Token"
          width="200rem"
          height="200rem"
          src="/Sucuro-Asset-Token.jpg"
          href={"/"}
        />
        <h1>Sucuro</h1>
        <h1> Governance Token</h1>
        <p>
          Our ecosystem starts with SUCG: a token that replaces old world real
          estate intermediaries; and earns revenue.
        </p>
      </div>

      <div>
        <Image
          alt="Sucuro Governance Token"
          width="200rem"
          height="200rem"
          src="/Sucuro-Governance-Token.jpg"
          href={"/"}
        />
        <h1>Sucuro</h1>
        <h1>Asset Token</h1>
        <p>
          At the heart of our ecosystem is SUCF: a token backed by real world
          real estate assets with reinvested yield.
        </p>
      </div>
    </STokens>
  );
}

const STokens = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    max-width: 350px;
    max-height: 600px;
    margin: 1rem;
    background: rgba(255, 255, 255, 0.9);
    text-align: center;
    padding: 6rem 2rem;
    box-shadow: var(--boxshadow01);
    border-radius: 1rem;
    transition: all ease 0.3s;
    z-index: 10;

    &:hover {
      filter: brightness(120%);
      box-shadow: var(--boxshadow03);
      background: rgba(255, 255, 255, 1);
    }
  }
  img {
    border-radius: 50%;
  }
`;

const SVideo = styled.video`
  position: absolute;
  right: 0;
  // bottom: -10rem;
  // min-width: 100%;
  // min-height: 50vh;
  z-index: 1;
  //   z-indexKP0-O=-POLIK8JUKHJYHTG87F6D5SDA4S3a3wq : 2;
`;
