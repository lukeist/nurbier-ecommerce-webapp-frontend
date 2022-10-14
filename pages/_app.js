import "../styles/globals.css";
import { StateContext } from "../lib/context";
import Nav from "../components/Nav";
import { Provider, createClient } from "urql";

const client = createClient({ url: "http://localhost:1337/graphql" });
function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <StateContext>
        <Nav />
        <Component {...pageProps} />
      </StateContext>
    </Provider>
  );
}

export default MyApp;
