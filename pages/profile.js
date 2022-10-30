import { useRouter } from "next/router";
import formatMoney from "../lib/formatMoney";
import BtnAddToCart from "../components/_btnAddToCart";

const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled from "styled-components";
import BtnAddToCart from "../components/_btnAddToCart";

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
  return (
    user && (
      <SProfile>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <div>
          {orders.map((order) => {
            return (
              order.receipt_email === user.email && (
                <Order>
                  <h4>Order Number: {order.id}</h4>
                  <p>Amount: {formatMoney(order.amount)}</p>
                  <p>Receipt Email: {user.email}</p>
                </Order>
              )
            );
          })}
        </div>
        <BtnAddToCart onClick={() => route.push("/api/auth/logout")}>
          Logout
        </BtnAddToCart>
      </SProfile>
    )
  );
}

const SProfile = styled.div`
  background: black;
`;
const Order = styled.div`
  background: black;
  margin: 2rem 0rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 1rem;
  }
`;
