import "../styles/globals.css";
import { StateContext } from "../lib/context";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Nav />
      <Component {...pageProps} />
    </StateContext>
  );
}

export default MyApp;
