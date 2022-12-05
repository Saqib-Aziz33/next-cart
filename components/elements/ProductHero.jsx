import { Box, Container, Heading, HStack } from "@chakra-ui/react";
import Rating from "react-star-rating-lite";

function ProductHero({ product }) {
  return (
    <div
      className="product-hero"
      style={{
        backgroundImage: `url(${product.image})`,
      }}
    >
      <div className="overlay" />
      <Container position="relative" zIndex={2} textAlign="center">
        <Heading size="lg">{product.title}</Heading>
        <Box mt={4}>
          <Rating readonly value={product.rating.rate} />
        </Box>
      </Container>
    </div>
  );
}
export default ProductHero;
