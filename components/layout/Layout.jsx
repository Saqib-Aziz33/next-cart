import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Box, ChakraProvider } from "@chakra-ui/react";
import ScrollToTop from "react-scroll-to-top";
import NextNProgress from "nextjs-progressbar";
import { motion } from "framer-motion";
import { CartProvider } from "../../context/cart";

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
      <NextNProgress color="#DA0037" height={5} />

      <ChakraProvider>
        <CartProvider>
          <Box maxW="100vw" overflowX="hidden">
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -400 }}
              transition={{
                duration: 0.5,
              }}
            >
              <main role="main">{children}</main>
              {/* {children} */}
            </motion.div>
          </Box>
          <Header />
          <Footer />
        </CartProvider>
      </ChakraProvider>
    </>
  );
};
export default Layout;
