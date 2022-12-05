import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ChakraProvider } from "@chakra-ui/react";
import ScrollToTop from "react-scroll-to-top";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next Cart</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next.js application with fake store api"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="ecommerce, fake-store, next-ecommerce" />
      </Head>

      <ScrollToTop
        viewBox="0 0 256 256"
        smooth
        height="20px"
        color="#fff"
        style={{ backgroundColor: "#DA0037" }}
      />
      <ChakraProvider>
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </ChakraProvider>
    </>
  );
};
export default Layout;
