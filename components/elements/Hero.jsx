import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";

function Hero() {
  return (
    <div className="hero">
      <div className="overlay" />
      <Container zIndex={2} position="relative" maxW={1200} py={8}>
        <Box maxW="600px">
          <Heading>
            Welcome to <span className="text-primary bold">NEXT</span> cart
          </Heading>
          <Text mt={2}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            minus velit nisi omnis. Et quibusdam eos eius in sunt cum quis
            beatae dicta voluptas harum?
          </Text>
          <HStack mt={6}>
            <Button className="btn-primary">Order now</Button>
            <Button variant="">Items</Button>
          </HStack>
        </Box>
      </Container>
    </div>
  );
}
export default Hero;
