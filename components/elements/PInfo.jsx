import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsCartPlus } from "react-icons/bs";
import Back from "./Back";
import { motion } from "framer-motion";

function PInfo({ product }) {
  return (
    <Container my={8} maxW={1200} as="article">
      <Back to="/products" text="Home" />

      <Grid my={8} gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={4}>
        <GridItem>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image src={product.image} alt={product.title} rounded="xl" />
          </motion.div>
        </GridItem>

        <GridItem>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Stack px={{ base: 2, md: 8 }} gap={3}>
              <Heading as="h2">{product.title}</Heading>
              <Text as="p">{product.description}</Text>
              <Box>
                <Text
                  as="small"
                  bg="pink.100"
                  className="text-primary"
                  p={1}
                  rounded="md"
                >
                  {product.category}
                </Text>
              </Box>
              <Heading size="lg">
                $<span className="text-primary">{product.price}</span>
              </Heading>

              <HStack justify="space-between">
                <Button className="btn-primary" leftIcon={<BsCartPlus />}>
                  Add to cart
                </Button>
                <Text color="green.400">IN STOCK</Text>
              </HStack>
              <Text as="small">
                Average ratings:{" "}
                <Text
                  as="span"
                  color={product.rating.rate < 3 ? "yellow.300" : "green.300"}
                >
                  {product.rating.rate}
                </Text>
              </Text>
            </Stack>
          </motion.div>
        </GridItem>
      </Grid>
    </Container>
  );
}
export default PInfo;
