import "../styles/globals.css";
import { StateContext } from "../lib/context";
import Nav from "../components/Nav";
import { Provider, createClient } from "urql";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "@auth0/nextjs-auth0";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
        {/* <AnimateSharedLayout type="crossfade"> */}
        <Provider value={client}>
          <Toaster />
          <Nav />
          <Component {...pageProps} />
        </Provider>
        {/* </AnimateSharedLayout> */}
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
