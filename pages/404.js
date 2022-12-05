import { VStack } from "@chakra-ui/react";
import Image from "next/image";
import Back from "../components/elements/Back";

export default function Page() {
  return (
    <>
      <VStack mt={32} gap={4}>
        <Image src="/assets/404.png" height={100} width={200} />
        <Back to="/" text="Back to Home" />
      </VStack>
    </>
  );
}
