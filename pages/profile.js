import { useRouter } from "next/router";
import formatMoney from "../lib/formatMoney";
import { SMainBtn } from "../styles/SMainBtn";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled from "styled-components";
import getDate from "../components/_getDate";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stipe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();
  console.log(user, orders);
  return (
    user && (
      <SProfile id="SProfile">
        <SUserInfo>
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          <SMainBtn onClick={() => route.push("/api/auth/logout")}>
            Logout
          </SMainBtn>
        </SUserInfo>
        <SOrderHistory>
          {orders.map((order) => {
            return (
              order.receipt_email === user.email && (
                <Order>
                  <p>Rechnung Nr. {order.id.slice(4)}</p>
                  <p>Datum: {getDate(order.created)}</p>
                  <p>Gesamt: {formatMoney(order.amount)}</p>
                </Order>
              )
            );
          })}
        </SOrderHistory>
      </SProfile>
    )
  );
}

const SProfile = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  width: 60%;
  margin: 10vh auto;
`;

const SUserInfo = styled.div``;

const Order = styled.div`
  background: #111111;
  margin-top: 2rem;
  padding: 3rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;

  h4 {
    font-size: 1rem;
  }
`;

const SOrderHistory = styled.div`
  display: flex;
  flex-direction: column;
`;
