import styled from "styled-components";
import toast from "react-hot-toast";
import { useStateContext } from "../lib/context";

const BtnAddToCart = ({ light }) => {
  const { qty, onAdd } = useStateContext();
  const { title } = light.attributes;

  // create a toast
  const notify = () => {
    toast(`${qty} x "${title}" zum Warenkorb hinzugefügt.`, {
      icon: "🍺",
      duration: 2000,
      style: {
        fontSize: "1.4rem",
        borderRadius: "3px",
        background: "#111111",
        color: "#fff",
        maxWidth: "480px",
      },
    });
  };

  return (
    <SAdd
      onClick={() => {
        notify();
        onAdd(light.attributes, qty);
      }}
    >
      In den Warenkorb
    </SAdd>
  );
};

export default BtnAddToCart;

const SAdd = styled.button`
  cursor: pointer;
  background: black;
  color: white;
  border: solid 2px white;
  padding: 0 0.5rem;
  z-index: 2;
  height: 4rem;

  &:hover {
    background: white;
    color: black;
    border: solid 2px black;
  }
`;
