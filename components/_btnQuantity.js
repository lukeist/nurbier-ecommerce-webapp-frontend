import styled from "styled-components";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useStateContext } from "../lib/context";

const BtnQuantity = ({ item }) => {
  const { onAdd, onRemove } = useStateContext();

  return (
    <SQuantity>
      {/* <span>Quantity</span> */}
      <button onClick={() => onRemove(item)}>
        <AiOutlineMinusCircle />
      </button>
      <p>{item.quantity}</p>
      <button onClick={() => onAdd(item, 1)}>
        <AiOutlinePlusCircle />
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

  span {
    font-size: 2rem;
    text-align: left;
    margin-right: 2rem;
  }

  p {
    font-size: 2rem;
    color: white;
    opacity: 0.9;
    margin: 0 0.5rem;
    z-index: 2;
    width: 3rem;
    text-align: center;
    // filter: drop-shadow(0 0 6px rgb(255 255 255 / 1));
    text-shadow: 1px 0 10px #ffffff;
  }

  svg {
    transition: all ease 0.3s;
    border-radius: 50%;
    font-size: 3rem;
    margin: 0.5rem 0;

    &:hover {
      background: white;
      color: black;
      filter: drop-shadow(0 0 3px rgb(255 255 255 / 1));
    }
  }
`;
