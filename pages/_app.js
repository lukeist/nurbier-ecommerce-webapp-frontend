import "../styles/globals.css";
import { StateContext } from "../lib/context";
import Nav from "../components/Nav";
import { Provider, createClient } from "urql";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    // <UserProvider>
    <StateContext>
      <Provider value={client}>
        {/* <Toaster /> */}
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </StateContext>
    // </UserProvider>
  );
}

export default MyApp;
