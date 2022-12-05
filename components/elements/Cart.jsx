import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        variant="solid"
        colorScheme="whiteAlpha"
        onClick={onOpen}
        leftIcon={<AiOutlineShoppingCart />}
      >
        Cart
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="cart-content-wrapper">
          <DrawerCloseButton />
          <DrawerHeader>Selected items</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter justifyContent="space-between">
            <Heading size="md">Total:</Heading>
            <Heading size="md">$50.00</Heading>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
