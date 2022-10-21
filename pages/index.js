import Head from "next/head";
import IntroTop from "../components/IntroTop";
import IntroMid from "../components/IntroMid";
import Footer from "../components/Footer";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import styled from "styled-components";
import IntroBeerCards from "../components/IntroBeerCards";

export default function Home() {
  // fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const lights = data.lights.data;

  return (
    <div>
      <Head>
        <title>Nur Bier | das beliebteste Bier Deutschlands!</title>
        <meta name="description" content="das beliebteste Bier Deutschlands!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Oswald:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <SMain>
        <IntroTop lights={lights} />
        <IntroBeerCards lights={lights} />
        <IntroMid lights={lights} />
      </SMain>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

const SMain = styled.main`
  // position: relative;
  // display: flex;
  // justify-content: center;
`;
