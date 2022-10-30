import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import { SMainBtn } from "../styles/SMainBtn";

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
        <h2>Vielen Dank.</h2>
        <h2>Wir haben deine Bestellung erhalten.</h2>

        <p>
          Wir senden eine Bestätigung und Versand-Updates an:{" "}
          <span className="bold">{order.customer_details.email}</span>
        </p>
        <p>Bestellung: #{order.payment_intent}</p>
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
            <h4>Artikeln</h4>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p className="bold">{item.description}</p>
                <p>
                  <span className="bold">Anzahl</span>: {item.quantity}
                </p>
                <p>
                  <span className="bold">Price</span>: {item.price.unit_amount}
                </p>
              </div>
            ))}
          </OrderInfo>
        </SOrderDetails>
        <SOrderTotal>
          <div>
            <p className="bold">
              Warenwert {(order.amount_total / 100).toFixed(2)} €
            </p>
            <p className="italic">DHL Standard Versand 3,90 €</p>
            <h4>
              Gesamt <span className="italic">inkl. MwSt.</span>{" "}
              {(order.amount_total / 100 + 3.9).toFixed(2)} €
            </h4>
          </div>
        </SOrderTotal>
        <SBtnWrapper>
          <SMainBtn onClick={() => route.push("/")}>
            Einkauf Fortsetzen
          </SMainBtn>
        </SBtnWrapper>
      </SOrderInfo>
    </SSuccessWrapper>
  );
}

const SSuccessWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SOrderInfo = styled(motion.div)`
  width: 90%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  background: black;

  h2 {
    font-weight: 500;
  }
  h4 {
    font-weight: 300;
    margin: 1rem 0;
  }

  button {
    width: 50%;
  }

  p {
    font-weight: 300;
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

const SBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SOrderTotal = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 5rem 2rem 0 2rem;
  max-height: 14rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  h4 > span {
    font-size: 1rem;
  }
`;
