import React, { useEffect } from "react";
import Nav from "./Nav";
import { Heading, Flex, IconButton, SlideFade } from "@chakra-ui/react";
import NavMobile from "./NavMobile";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";


function Header({ isHamburgerMenuOpen, toggleHamburgerMenu }) {
  const [display, changeDisplay] = useState("none")

  useEffect(() => {
    if (!isHamburgerMenuOpen) {
      // Close the NavMobile smoothly when isHamburgerMenuOpen becomes false
      setTimeout(() => {
        changeDisplay("none");
      }, 300); // Adjust the timeout duration to match your transition duration
    } else {
      changeDisplay("flex");
    }
  }, [isHamburgerMenuOpen]);

  return (
    <Flex as="header" flexDir="column" justifyContent="center" alignItems="center" position="sticky" top="0" bgColor="secondary.50" height={{base: isHamburgerMenuOpen ? "34vh" : "10vh", sm: isHamburgerMenuOpen ? "34vh" : "10vh", md: isHamburgerMenuOpen ? "34vh" : "10vh", lg: "10vh", xl: "10vh", "2xl": "10vh"}} width="100%" zIndex={999}>
      <Flex w="100%" maxWidth={1500} justifyContent="space-between" alignItems="center" paddingX={{base: "5vw", "2xl": "1vw"}} position="absolute" top="0">
      <Flex height="10vh" alignItems="center">
      <RouterLink className="navlink" to="/"><Heading size={{base: "lg", lg: "xl"}} color="text.950">karolyne<Heading size={{base: "lg", lg: "xl"}} bgGradient="linear(to-l, #eb984a, #ed4946)" bgClip="text" as="span">.dev</Heading></Heading></RouterLink>
      </Flex>
      <Nav/>
      <Flex height="10vh" alignItems="center" display={{base: "flex", lg: "none", xl: "none", "2xl":"none"}}>
        <IconButton display={{base: "flex", lg: "none", xl: "none", "2xl": "none"}} color="text.950" bg="transparent" onClick={() => {toggleHamburgerMenu();}} icon={isHamburgerMenuOpen? <CloseIcon w={6} h={6}/> : <HamburgerIcon w={8} h={8}/>} zIndex={999}/>
      </Flex>
      </Flex>
      <SlideFade in={isHamburgerMenuOpen} offsetX={1} onClose={() => {changeDisplay("none");}}>
      <Flex display={isHamburgerMenuOpen ? "flex" : "none"} marginTop="10vh">
      <NavMobile/>
      </Flex>
      </SlideFade>
    </Flex>
    );
}

export default Header;