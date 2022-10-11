import Head from "next/head";
import Intro from "../components/Intro";
import Three from "../components/Three";
import Eighth from "../components/Eighth";
import Tokens from "../components/Tokens";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>sucuro | blockchain-based real estate</title>
        <meta name="description" content="blockchain-based real estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
        <Three />
        <Eighth />
        <Tokens />
        <Footer />
      </main>

      <footer></footer>
    </div>
  );
}
