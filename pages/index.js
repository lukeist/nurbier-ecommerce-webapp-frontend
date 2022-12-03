import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import IntroBeerCards from "../components/IntroBeerCards";
import IntroBottom from "../components/IntroBottom";
import IntroTop from "../components/IntroTop";
import IntroMid from "../components/IntroMid";
import Head from "next/head";

export default function Home() {
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching)
    return (
      <div id="loading-beer">
        <video id="loading-video" autoPlay loop muted>
          <source src={"/loading.mp4"} type="video/mp4" />
        </video>
        <p id="loading-text">LOADING...</p>
      </div>
    );

  if (error)
    return (
      <div id="loading-beer">
        <video id="loading-video" autoPlay loop muted>
          <source src={"/loading.mp4"} type="video/mp4" />
        </video>
        <p>{error.message}</p>;
      </div>
    );

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
