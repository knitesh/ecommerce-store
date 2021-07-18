
import {    
    Text,
    Button,
    Flex,
  } from "@chakra-ui/react";

  import { FiShoppingBag } from "react-icons/fi";

const ViewCart = () =>{

    return (<Flex justifyContent="space-between" alignContent="center">
    <Text
      as="a"
      href="/"
      fontSize="2rem"
      color="gray.900"
      fontFamily="Robo"
      my="5px"
    >
      Nitex Tech Tee Store
    </Text>
    <Button
      my="5px"
      colorScheme="green"
      variant="ghost"
      leftIcon={<FiShoppingBag size="24px" />}
      size="lg"
      p={2}
      className="snipcart-checkout"
    >
      View Cart
    </Button>
  </Flex>)
}

export default ViewCart;