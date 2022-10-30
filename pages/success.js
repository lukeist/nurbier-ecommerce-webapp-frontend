import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import BtnAddToCart from "../components/_btnAddToCart";
const { motion } = require("framer-motion");

const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

export default function Success({ order }) {
  const route = useRouter();

  console.log(order);
  return (
    <SSuccessWrapper>
      <SOrderInfo
        id="SOrderInfo"
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Vielen Dank für Ihre Bestellung!</h2>
        <h3>A confirmation email has been sent to </h3>
        <h3>{order.customer_details.email}</h3>
        <SOrderDetails>
          <Address>
            <h4>Adresse</h4>
            {Object.entries(order.customer_details.address).map(
              ([key, val]) => (
                <p key={key}>
                  {key}: {val}
                </p>
              )
            )}
          </Address>
          <OrderInfo>
            <h4>Products</h4>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>Product: {item.description}</p>
                <p>Anzahl: {item.quantity}</p>
                <p>Price: {item.price.unit_amount}</p>
              </div>
            ))}
          </OrderInfo>
        </SOrderDetails>
        <div></div>
        <BtnAddToCart onClick={() => route.push("/")}>
          Continue Shopping
        </BtnAddToCart>
      </SOrderInfo>
    </SSuccessWrapper>
  );
}

const SSuccessWrapper = styled.div`
  margin: 5rem 15rem;
`;

const SOrderInfo = styled(motion.div)`
  width: 80%;
  display: flex;
  flex-direction: column;
  background: black;
  padding: 3rem;

  h4 {
    margin: 1rem 0;
  }

  button {
    width: 50%;
  }
`;

const Address = styled.div`
  font-size: 1rem;
  width: 100%;
`;

const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  div {
    padding-bottom: 1rem;
  }
`;

const SOrderDetails = styled.div`
  display: flex;
`;
