import React from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio/Portfolio";
import { Flex } from "@chakra-ui/react";

function Main() {
  return (
    <Flex as="main" flexDirection="column">
      <Home/>
      <About/>
      <Portfolio/>
    </Flex>
  );
}

export default Main;