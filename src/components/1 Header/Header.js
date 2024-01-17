import React, { useEffect } from "react";
import Nav from "./Nav";
import { Heading, Button, Flex, IconButton, Slide, useToast } from "@chakra-ui/react";
import NavMobile from "./NavMobile";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { color } from "framer-motion";

function Header({ isHamburgerMenuOpen, toggleHamburgerMenu }) {
  const [display, changeDisplay] = useState("none")
  const toast = useToast()
  const showToast = () => {
    toast ({
      title: "Contact me",
      description: "email: karolynegomesdamota@gmail.com phone number: +358 41 311 7484 LinkedIn: blabla",
    })
  }

  useEffect(() => {
    if (!isHamburgerMenuOpen) {
      // Close the NavMobile smoothly when isHamburgerMenuOpen becomes false
      changeDisplay("none");
    }
  }, [isHamburgerMenuOpen]);

  return (
    <Flex as="header" flexDir="column" justifyContent="center" position="fixed" bgColor="orange.100" height={{base: isHamburgerMenuOpen ? "24vh" : "8vh", sm: isHamburgerMenuOpen ? "24vh" : "8vh", md: isHamburgerMenuOpen ? "24vh" : "8vh", lg: "6vh", xl: "6vh", "2xl": "6vh"}} width="100%" zIndex={10}>
      <Flex justifyContent="space-between" align="center" marginX="5vw">
      <Flex height="8vh" alignItems="center">
        <Heading>karolyne<Heading color="orange.300" as="span">.dev</Heading></Heading>
      </Flex>
      <Nav/>
      <Button display={{base: "none", lg: "initial", xl: "initial", "2xl": "initial"}} backgroundColor="orange.300" _hover={{backgroundColor: "orange.500", color: "white"}} onClick={showToast}>Contact me</Button>
      <Flex height="8vh" alignItems="center" display={{base: "flex", lg: "none", xl: "none", "2xl":"none"}}>
        <IconButton display={{base: "flex", lg: "none", xl: "none", "2xl": "none"}} bgColor="orange.100" color="orange.300" onClick={() => {changeDisplay("flex"); toggleHamburgerMenu();}} icon={isHamburgerMenuOpen? <CloseIcon /> : <HamburgerIcon/>}/>
      </Flex>
      </Flex>
      <Flex display={isHamburgerMenuOpen ? "flex" : "none"}>
      <NavMobile/>
      </Flex>
    </Flex>
    );
}

export default Header;