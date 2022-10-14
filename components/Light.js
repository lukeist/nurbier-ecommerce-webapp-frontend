import Image from "next/image";
import styled from "styled-components";

export default function Light({ light }) {
  const { title, price, image } = light.attributes;

  return (
    <SLight>
      <div>
        <img src={image.data.attributes.formats.small.url} alt={title} />
        <h1>{price}€</h1>
        <h3>{title}</h3>
      </div>
    </SLight>
  );
}

const SLight = styled.div`
  div {
    position: relative;
    margin: 1rem;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    border-radius: 1rem 1rem 2rem 2rem;
    transition: all ease 0.3s;
    overflow: hidden;
    z-index: 10;

    img {
      opacity: 0.95;
      width: 100%;
      max-width: 30rem;
      height: auto;
    }

    h1 {
      position: absolute;
      top: 5rem;
      right: 5rem;
      transition: all ease 0.3s;
      background: black;
    }

    &:hover {
      filter: brightness(140%);
      box-shadow: var(--boxshadow10);
      background: rgba(255, 255, 255, 1);
      transform: rotate(0.005turn) scale(1.05);
      z-index: 11;

      img {
        opacity: 1;
      }
    }
  }
`;
