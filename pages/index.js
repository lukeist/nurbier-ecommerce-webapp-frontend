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
        <title>Nur Bier | das beliebteste Bier Deutschlands!</title>
        <meta name="description" content="das beliebteste Bier Deutschlands!" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
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
