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
        <div>
          <h2>Vielen Dank.</h2>
          <h3>Wir haben deine Bestellung erhalten.</h3>
        </div>
        <p>
          Wir senden eine Bestätigung und Versand-Updates an:{" "}
          <span className="bold">{order.customer_details.email}</span>
        </p>
        <p>Bestellung: #{order.payment_intent.slice(3)}</p>
        <SOrderDetails id="SOrderDetails">
          <Address>
            <div>
              <h4>Rechnungsadresse</h4>
              <p>{order.customer_details.name}</p>
              <p>{order.customer_details.address.line1}</p>
              <p>
                {order.customer_details.address.postal_code}{" "}
                {order.customer_details.address.city}
              </p>
              <p>{order.customer_details.address.country}</p>
            </div>
            <div>
              <h4>Lieferungsadresse</h4>
              <p>{order.shipping_details.name}</p>
              <p>{order.shipping_details.address.line1}</p>
              <p>
                {order.shipping_details.address.postal_code}{" "}
                {order.shipping_details.address.city}
              </p>
              <p>{order.shipping_details.address.country}</p>
            </div>
          </Address>
          <OrderInfo>
            <h4>Artikeln</h4>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>
                  <span className="bold">{item.description}</span>
                </p>
                <p>Menge: {item.quantity}</p>
                <p>
                  Artikelpreise: {(item.price.unit_amount / 100).toFixed(2)} €
                </p>
              </div>
            ))}
          </OrderInfo>
        </SOrderDetails>
        <SOrderTotal>
          <div>
            <p>
              <span className="bold">Warenwert </span>
              {(order.amount_total / 100).toFixed(2)} €
            </p>
            <p className="italic">DHL Standard Versand 3,90 €</p>
            <h3>
              Gesamt
              <span className="italic">inkl. MwSt.</span>{" "}
              {(order.amount_total / 100 + 3.9).toFixed(2)} €
            </h3>
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

  h3 {
    font-weight: 500;
    padding-bottom: 2rem;
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
  margin-top: 2rem;
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
  margin-top: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  h3 > span {
    font-size: 1rem;
  }
`;
