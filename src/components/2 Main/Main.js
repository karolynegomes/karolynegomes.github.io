import React from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio/Portfolio";
import { Flex } from "@chakra-ui/react";

function Main({ isHamburgerMenuOpen }) {
  return (
    <Flex as="main" flexDirection="column" width="100%" marginTop={{base: isHamburgerMenuOpen ? "24vh" : "8vh", sm: isHamburgerMenuOpen ? "24vh" : "8vh", md: isHamburgerMenuOpen ? "24vh" : "8vh", lg: "6vh", xl: "6vh", "2xl": "6vh"}}>
      <Home/>
      <About/>
      <Portfolio/>
    </Flex>
  );
}

export default Main;