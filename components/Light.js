import { SMainBtn } from "../styles/SMainBtn";
import Image from "next/image";
import styled from "styled-components";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { useStateContext } from "../lib/context";
import Link from "next/link";
import { useEffect, useState } from "react";
import BtnAddToCart from "./_btnAddToCart";
import BtnQuantity from "./_btnQuantity";

export default function Light({ light }) {
  const { title, price, image, handle } = light.attributes;
  const { cartItems, qty, setQty, increaseQty, decreaseQty, onAdd, onRemove } =
    useStateContext();

  useEffect(() => {
    setQty(1);
  }, []);

  // useEffect(() => {
  //   const item = cartItems.filter(
  //     (item) => item.handle === light.attributes.handle
  //   );
  //   console.log(item);
  //   setCurrentItem(item);
  // }, [cartItems.length]);

  return (
    <SLight className="SLight">
      <Link href={`/helles/${handle}`}>
        <div className="SLight-Cards">
          <img src={image.data.attributes.formats.small.url} alt={title} />
          <div>
            <h1>{price}€</h1>
            {/* <h3>{title}</h3> */}
          </div>
        </div>
      </Link>
      <SBtnGroup>
        {cartItems.length < 1 ? (
          <BtnAddToCart className="" light={light} />
        ) : (
          <BtnQuantity className="" light={light} />
        )}
      </SBtnGroup>
    </SLight>
  );
}

const SLight = styled.div`
  margin-bottom: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  .SLight-Cards {
    margin: 0 3%;
    padding: 8rem 4rem;
    transition: all ease 0.3s;
    overflow: hidden;
    z-index: 10;
    cursor: pointer;
    z-index: 1;
    > div {
      transition: all ease 0.3s;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      h1 {
        margin: -2rem;
      }

      h3 {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    img {
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

const SBtnGroup = styled.div`
  margin: -5rem;
  z-index: 12;
`;
