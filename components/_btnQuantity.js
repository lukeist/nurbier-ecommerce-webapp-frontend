import styled from "styled-components";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useStateContext } from "../lib/context";
import { useState } from "react";

const BtnQuantity = ({ light, qty }) => {
  const [currentItem, setCurrentItem] = useState([]);

  const { onAdd, onRemove } = useStateContext();
  console.log(qty);
  return (
    <SQuantity
    // className="SQuantity"
    >
      <button>
        <AiOutlineMinusCircle onClick={() => onRemove(light.attributes)} />
      </button>
      <p>{currentItem.quantity}</p>
      <button>
        <AiOutlinePlusCircle onClick={() => onAdd(light.attributes, 1)} />
      </button>
    </SQuantity>
  );
};
export default BtnQuantity;

const SQuantity = styled.div`
  display: flex;
  align-items: center;
  color: white;

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
    opacity: 1;
    font-size: 3rem;
    margin: 0.5rem 0;

    &:hover {
      background: white;
      color: black;
      // box-shadow: var(--boxshadow10);
      filter: drop-shadow(0 0 6px rgb(255 255 255 / 1));
    }
  }
`;
