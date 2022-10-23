import { SMainBtn } from "../styles/SMainBtn";
import Image from "next/image";
import styled from "styled-components";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../lib/context";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Light({ light }) {
  const [currentItem, setCurrentItem] = useState([]);
  const { title, price, image, handle } = light.attributes;
  const { cartItems, qty, setQty, increaseQty, decreaseQty, onAdd, onRemove } =
    useStateContext();

  useEffect(() => {
    setQty(1);
  }, []);

  useEffect(() => {
    const item = cartItems.filter(
      (item) => item.handle === light.attributes.handle
    );
    console.log(item);
    setCurrentItem(item);
  }, [cartItems.length]);

  // create a toast
  const notify = () => {
    toast.success(`${title} added to your cart.`, { duration: 1500 });
  };

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
      {cartItems.length < 1 ? (
        <SAdd
          onClick={() => {
            notify();
            onAdd(light.attributes, 1);
          }}
        >
          Add to Cart
        </SAdd>
      ) : (
        <SQuantity className="SQuantity">
          <button>
            <AiFillMinusCircle onClick={() => onRemove(light.attributes)} />
          </button>
          <p>{currentItem.quantity}</p>
          <button>
            <AiFillPlusCircle onClick={() => onAdd(light.attributes, 1)} />
          </button>
        </SQuantity>
      )}
    </SLight>
  );
}

const SLight = styled.div`
  padding: 10rem 0;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  .SLight-Cards {
    position: relative;
    margin: 0 3%;
    padding: 8rem 4rem;
    transition: all ease 0.3s;
    overflow: hidden;
    z-index: 10;
    // max-width: 25rem;
    cursor: pointer;

    > div {
      position: absolute;
      top: 56vh;
      transition: all ease 0.3s;
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      h1 {
      }

      h3 {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    img {
      opacity: 0.98;
      width: 100%;
      height: 100%;
      transition: all ease 0.3s;

      &:hover {
        filter: brightness(140%);
        transform: rotate(0.01turn) scale(1.3);
        background: transparent;

        z-index: 11;
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

export const SAdd = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
  width: 60%;
  font-weight: 500;
  cursor: pointer;
  background: black;
  color: white;
  border: solid 2px white;
  &:hover {
    background: white;
    color: black;
    border: solid 2px black;
  }
`;
