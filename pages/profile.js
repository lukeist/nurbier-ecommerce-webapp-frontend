import { useRouter } from "next/router";
import formatMoney from "../lib/formatMoney";
import { SMainBtn } from "../styles/SMainBtn";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled from "styled-components";
import getDate from "../components/_getDate";
import Link from "next/link";

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
            <div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
            <img src={user.picture} alt="profile photo" />
          </div>
          <div>
            <SMainBtn onClick={() => route.push("/api/auth/logout")}>
              Logout
            </SMainBtn>
          </div>
        </SUserInfo>
        <SOrderHistory>
          {orders.map((order) => {
            return (
              order.receipt_email === user.email && (
                <Order>
                  <p>Rechnung Nr. {order.id.slice(4)}</p>
                  <div>
                    <div>
                      <p>Datum: {getDate(order.created)}</p>
                      <p>Gesamt: {formatMoney(order.amount)}</p>
                    </div>
                    <Link href={order.charges.data[0].receipt_url}>
                      Rechnung
                    </Link>
                  </div>
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

const SUserInfo = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
  }
`;

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

  > div {
    display: flex;
    justify-content: space-between;
  }

  a {
    cursor: pointer;
    padding: 0.5rem 1rem;
    background: black;
    font-size: 1.2rem;

    &:hover {
      background: #999999;
    }
  }
`;

const SOrderHistory = styled.div`
  display: flex;
  flex-direction: column;
`;
