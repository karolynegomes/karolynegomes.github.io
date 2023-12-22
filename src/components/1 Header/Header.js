import React from "react";
import Nav from "./Nav";
import { Heading, Button, Flex } from "@chakra-ui/react";

function Header() {
  return (
    <Flex as="header" padding={1} justifyContent="space-between" alignItems="center" minHeight={100}>
      <Flex marginLeft={20}>
        <Heading>karolyne</Heading>
        <Heading color="orange.300">.dev</Heading>
      </Flex>
      <Nav></Nav>
      <Button
      backgroundColor="orange.300"
      marginRight={20}
      _hover={{backgroundColor: "orange.500", color: "white"}}>Contact me</Button>
    </Flex>
    );
}

export default Header;