import styled from "styled-components";
import { useStateContext } from "../lib/context";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import getStripe from "../lib/getStripe";

// animation variants
const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();

  // payment w stripe
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <SCart
        animate={{ x: "0%" }}
        initial={{ x: "50%" }}
        transition={{ type: "tween" }}
        exit={{ x: "50%" }}
        onClick={(e) => e.stopPropagation()}
      >
        {cartItems.length < 1 ? (
          <SEmptyCart
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1>Your cart is empty.</h1>
            <FaShoppingCart />
          </SEmptyCart>
        ) : (
          <Cards layout variants={cards} initial="hidden" animate="show">
            {cartItems.map((item) => (
              <CartItem layout variants={card} key={item.slug}>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>${item.price}</h3>
                  <StyledQuantity>
                    <span>Quantity</span>
                    <button onClick={() => onRemove(item)}>
                      <AiFillMinusCircle />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => onAdd(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                  </StyledQuantity>
                </CardInfo>
              </CartItem>
            ))}
          </Cards>
        )}

        {cartItems.length >= 1 && (
          <Checkout layout>
            <h3>Subtotal: ${totalPrice}</h3>
            <button onClick={handleCheckout}>Purchase</button>
          </Checkout>
        )}
      </SCart>
    </CartWrapper>
  );
}

// animation
const { motion } = require("framer-motion");

const CartWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  //   display: none;
`;

const SCart = styled(motion.div)`
  width: 30%;
  padding: 2rem 1rem;
  overflow-y: scroll;
  position: relative;

  background: rgb(17, 17, 17);
  background: linear-gradient(
    90deg,
    rgba(17, 17, 17, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const CartItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 1rem;
  margin: 2rem 0rem;
  img {
    width: 6rem;
    border-radius: 0.3rem;
  }
`;

const CardInfo = styled(motion.div)`
  width: 50%;
  div {
    display: flex;
    flex-direction: space-between;
  }
`;

const SEmptyCart = styled(motion.div)`
  position: absolute;
  top: 0;
  // left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  h1 {
    font-size: 2rem;
    padding: 2rem;
  }

  svg {
    font-size: 10rem;
    color: var(--secondary);
  }
`;

const Checkout = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
  }
`;

const Cards = styled(motion.div)``;
