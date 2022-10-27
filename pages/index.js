import Head from "next/head";
import IntroTop from "../components/IntroTop";
import IntroMid from "../components/IntroMid";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import IntroBeerCards from "../components/IntroBeerCards";
import IntroBottom from "../components/IntroBottom";

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
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Oswald:wght@300;400&family=Roboto+Slab:wght@300&family=Roboto:wght@300;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <IntroTop lights={lights} />
        <IntroBeerCards lights={lights} />
        <IntroMid lights={lights} />
        <IntroBottom />
      </main>
    </div>
  );
}
