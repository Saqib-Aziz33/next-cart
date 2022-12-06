import { Box, Container } from "@chakra-ui/react";
import AvailableItems from "../../components/elements/AvailableItems";
import Back from "../../components/elements/Back";

export async function getServerSideProps() {
  const responce = await fetch(`https://fakestoreapi.com/products`);
  const products = await responce.json();

  return {
    props: { products },
  };
}

export default function ProductPage({ products }) {
  return (
    <>
      <Container maxW={1200} overflowY="hidden">
        <Box mt={40}>
          <Back to="/" text="Home" />
        </Box>
        <AvailableItems products={products} />
      </Container>
    </>
  );
}
