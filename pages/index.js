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
