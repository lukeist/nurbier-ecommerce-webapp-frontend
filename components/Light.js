import { useStateContext } from "../lib/context";
import { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import BtnAddToCart from "./_btnAddToCart";
import BtnQuantity from "./_btnQuantity";

export default function Light({ light }) {
  const { title, price, image, handle } = light.attributes;
  const { cartItems, setQty } = useStateContext();

  useEffect(() => {
    setQty(1);
  }, []);

  const item = cartItems.filter(
    (item) => item.handle === light.attributes.handle
  )[0];

  return (
    <SLight className="SLight">
      <Link href={`/helles/${handle}`}>
        <div className="SLight-Cards">
          <img src={image.data.attributes.formats.small.url} alt={title} />
          <div>
            <h1>{price.toFixed(2)}€</h1>
          </div>
        </div>
      </Link>
      <SBtnGroup id="light-btngroup">
        {item === undefined ? (
          <BtnAddToCart className="" light={light} />
        ) : (
          <BtnQuantity className="" item={item} />
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
