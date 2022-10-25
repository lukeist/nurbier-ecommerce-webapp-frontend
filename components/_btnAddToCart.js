import styled from "styled-components";
import toast from "react-hot-toast";
import { useStateContext } from "../lib/context";

const BtnAddToCart = ({ light }) => {
  const { onAdd } = useStateContext();
  const { title } = light.attributes;

  // create a toast
  const notify = () => {
    toast(`"${title}" added to your cart.`, {
      icon: "🍺",
      duration: 2000,
      style: {
        fontSize: "1.4rem",
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <SAdd
      onClick={() => {
        notify();
        onAdd(light.attributes, 1);
      }}
    >
      Add to Cart
    </SAdd>
  );
};

export default BtnAddToCart;

const SAdd = styled.button`
  cursor: pointer;
  background: black;
  color: white;
  border: solid 2px white;
  padding: 0 2rem;
  z-index: 2;
  height: 4rem;

  &:hover {
    background: white;
    color: black;
    border: solid 2px black;
  }
`;
