import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

function Error() {
  return (
    <Flex as="article" h="90vh" justifyContent="center" alignItems="center">
        <Heading>Page not found</Heading>
    </Flex>
  );
}

export default Error;