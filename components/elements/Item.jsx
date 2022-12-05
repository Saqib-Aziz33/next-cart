import { Image, Stack, Text, Button, Heading, Box } from "@chakra-ui/react";
import { BsCartPlus } from "react-icons/bs";
import Link from "next/link";

function Item({ item }) {
  return (
    <Box className="card">
      <div className="img-wrapper">
        <Image src={item.image} alt={item.title} />
      </div>
      <Stack mt="6" spacing="3" className="card-body">
        <Link href={`/products/${item.id}`}>
          <Box className="heading-wrapper">
            <Heading size="md" className="item-heading">
              {item.title.slice(0, 20)}
            </Heading>
            <div className="overlay-grad" />
          </Box>
          <Text pt={2}>
            {item.description.slice(0, 50)} ...{" "}
            <span className="text-primary" style={{ fontWeight: 600 }}>
              read more
            </span>
          </Text>
          <Text className="text-primary" fontSize="2xl" fontWeight="bold">
            ${item.price}
          </Text>
        </Link>

        <Stack pt={4}>
          <Button className="btn-primary" leftIcon={<BsCartPlus />}>
            Add to cart
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
export default Item;
