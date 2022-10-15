import { SMainBtn } from "../styles/SMainBtn";
import Image from "next/image";
import styled from "styled-components";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../lib/context";

export default function Light({ light }) {
  const { title, price, image } = light.attributes;
  const { qty, setQty, increaseQty, decreaseQty, onAdd } = useStateContext();

  return (
    <SLight className="slight">
      <div id="slight-cards">
        <img src={image.data.attributes.formats.small.url} alt={title} />
        <div>
          <h1>{price}€</h1>
          <h2>{title}</h2>
        </div>
      </div>

      {/* <SMainBtn>Join the Early Access List</SMainBtn> */}

      <SQuantity id="slight-qty">
        <button>
          <AiFillMinusCircle onClick={decreaseQty} />
        </button>
        <p>{qty}</p>
        <button>
          <AiFillPlusCircle onClick={increaseQty} />
        </button>
      </SQuantity>
    </SLight>
  );
}

const SLight = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  #slight-cards {
    position: relative;
    margin: 0 2%;
    // padding: 1rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 1rem 1rem 2rem 2rem;
    transition: all ease 0.3s;
    overflow: hidden;
    z-index: 10;
    cursor: pointer;

    background: url(image.data.attributes.formats.small.url) no-repeat center
      center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    > div {
      position: absolute;
      bottom: 1rem;
      transition: all ease 0.3s;
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: end;
      width: 100%;

      h1 {
        font-size: 5rem;
        margin-right: 1rem;
      }

      h2 {
        color: var(--textsecond);
        margin-right: 1rem;
        font-size: 2rem;
      }
    }

    img {
      opacity: 0.98;
      width: 100%;
      max-width: 30rem;
      height: auto;
      transition: all ease 0.3s;
    }

    &:hover {
      filter: brightness(140%);
      box-shadow: var(--boxshadow10);
      background: rgba(255, 255, 255, 1);
      // transform: rotate(0.005turn) scale(1.05);
      transform: scale(1.05);

      z-index: 11;

      img {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
`;

const SQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  button {
    background: transparent;
    border: none;
    display: flex;

    font-size: 3rem;
    cursor: pointer;
    z-index: 2;
  }

  p {
    font-size: 3rem;
    color: black;
    opacity: 0.9;
    margin: 0 0.5rem;
    padding-bottom: 0.5rem;
    z-index: 2;
    width: 3rem;
    text-align: center;
  }

  svg {
    color: black;
    transition: all ease 0.3s;
    border-radius: 50%;
    opacity: 0.9;

    &:hover {
      opacity: 1;
      box-shadow: var(--boxshadow10);
    }
  }
`;
