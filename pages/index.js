import Head from "next/head";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";

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
        <title>sucuro | blockchain-based real estate</title>
        <meta name="description" content="blockchain-based real estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro lights={lights} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
