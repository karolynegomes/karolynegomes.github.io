import React from "react";
import Nav from "./Nav";
import { Heading, Button, Flex, IconButton } from "@chakra-ui/react";
import NavMobile from "./NavMobile";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

function Header() {
  const [display, changeDisplay] = useState("none")
  const [overflow, changeOverflow] = useState("visible")
  return (
    <Flex as="header" position="fixed" bgColor="orange.100" justifyContent="space-between" alignItems="center" minHeight={70} width="100vw" >
      <Flex paddingLeft={{base: 5, sm: 5, md: 5, lg: 20, xl: 20, "2xl": 20}}>
        <Heading>karolyne</Heading>
        <Heading color="orange.300">.dev</Heading>
      </Flex>
      <Flex>
      <Nav></Nav>
      <IconButton paddingRight={{base: 5}} onClick={() => changeDisplay("flex") && changeOverflow("hidden")} bgColor="orange.100" color="orange.300" display={{base: "initial", lg: "none", xl: "none", "2xl": "none"}} icon={<HamburgerIcon/>}/>
      </Flex>
       <Flex w="100vw" bgColor="orange.50" pos="fixed" top="0" left="0" overflow="auto" flexDir="column" display={display}>
        <Flex paddingLeft={{base: 5, md: 20, lg: 20}} paddingY={{base: 3}} justifyContent="space-between" alignItems="center" minHeight={70} bgColor="orange.100">
          <Flex>
            <Heading>karolyne</Heading>
            <Heading color="orange.300">.dev</Heading>
          </Flex>
          <Flex justify="flex-end">
            <IconButton paddingRight={{base: 5}} bgColor="orange.100" color="orange.300" onClick={() => changeDisplay('none')} icon={<CloseIcon />}/>
          </Flex>
        </Flex>
      <NavMobile></NavMobile>
      </Flex>
      <Button
      display={{base: "none", lg: "initial", xl: "initial", "2xl": "initial"}}
      backgroundColor="orange.300"
      marginRight={20}
      _hover={{backgroundColor: "orange.500", color: "white"}}>Contact me</Button>
    </Flex>
    );
}

export default Header;