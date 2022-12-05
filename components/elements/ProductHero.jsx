import { Container, Heading } from "@chakra-ui/react";

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
      </Container>
    </div>
  );
}
export default ProductHero;
