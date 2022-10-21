import { useStateContext } from "../lib/context";
import {
  CartItem,
  CardInfo,
  CartWrapper,
  StyledCart,
  StyledEmptyCart,
  Checkout,
  Cards,
} from "../styles/StyledCart";

import { StyledQuantity } from "../styles/StyledProductDetails";
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
      <StyledCart
        animate={{ x: "0%" }}
        initial={{ x: "50%" }}
        transition={{ type: "tween" }}
        exit={{ x: "50%" }}
        onClick={(e) => e.stopPropagation()}
      >
        {cartItems.length < 1 ? (
          <StyledEmptyCart
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1>Your cart is empty.</h1>
            <FaShoppingCart />
          </StyledEmptyCart>
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
      </StyledCart>
    </CartWrapper>
  );
}

// <StyledCart>
//   {cartItems.length < 1 && (
//     <div>
//       <h1>Your cart is empty.</h1>
//     </div>
//   )}

//   {cartItems.length >= 1 &&
//     cartItems.map((item) => {
//       <div>
//         <h1>as;dfjasd</h1>
//         {/* <img
//                 src={item.image.data.attributes.formats.small.url}
//                 alt={item.title}
//               />
//               <div>
//                 <h3>Title</h3>
//                 <h3>Price</h3>
//               </div> */}
//       </div>;
//     })}
// </StyledCart>;
