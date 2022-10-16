import { SMainBtn } from "../styles/SMainBtn";
import Image from "next/image";
import styled from "styled-components";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../lib/context";
import Link from "next/link";

export default function Light({ light }) {
  const { title, price, image, handle } = light.attributes;
  const { qty, setQty, increaseQty, decreaseQty, onAdd } = useStateContext();

  return (
    <SLight className="SLight">
      <Link href={`/helles/${handle}`}>
        <div className="SLight-Cards">
          <img src={image.data.attributes.formats.small.url} alt={title} />
          <div>
            <h1>{price}€</h1>
            <h3>{title}</h3>
          </div>
        </div>
      </Link>

      <SQuantity className="SQuantity">
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

  .SLight-Cards {
    position: relative;
    margin: 0 3%;
    border-radius: 1rem 1rem 2rem 2rem;
    transition: all ease 0.3s;
    overflow: hidden;
    z-index: 10;
    max-width: 30rem;
    cursor: pointer;

    > div {
      position: absolute;
      bottom: 1rem;
      transition: all ease 0.3s;
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;

      h1 {
        // font-size: 5rem;
        margin-right: 1rem;
      }

      h3 {
        // font-size: 2rem;
        color: var(--textsecond);
        margin-right: 1rem;
      }
    }

    img {
      opacity: 0.98;
      width: 100%;
      height: 100%;
      // max-width: 30rem;
      transition: all ease 0.3s;
    }

    &:hover {
      filter: brightness(140%);
      box-shadow: var(--boxshadow10);
      transform: rotate(0.005turn) scale(1.03);
      // transform: scale(1.05);

      z-index: 11;

      img {
        opacity: 1;
        transform: scale(1.05);
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
    color: white;
    opacity: 0.9;
    margin: 0 0.5rem;
    padding-bottom: 0.5rem;
    z-index: 2;
    width: 3rem;
    text-align: center;
    filter: drop-shadow(0 0 6px rgb(255 255 255 / 1));
  }

  svg {
    color: white;
    transition: all ease 0.3s;
    border-radius: 50%;
    opacity: 0.7;

    &:hover {
      opacity: 1;
      color: white;
      // box-shadow: var(--boxshadow10);
      filter: drop-shadow(0 0 6px rgb(255 255 255 / 1));
    }
  }
`;
