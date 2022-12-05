import { Button } from "@chakra-ui/react";
import { BsArrow90DegLeft } from "react-icons/bs";
import Link from "next/link";

function Back({ to, text }) {
  return (
    <Link href={to}>
      <Button
        colorScheme="blackAlpha"
        leftIcon={<BsArrow90DegLeft />}
        boxShadow="md"
        size="sm"
      >
        {text}
      </Button>
    </Link>
  );
}
export default Back;
