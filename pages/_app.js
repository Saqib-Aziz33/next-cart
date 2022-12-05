import "../styles/globals.scss";
import Layout from "../components/layout/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <Layout key={router.asPath}>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
