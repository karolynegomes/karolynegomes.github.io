import { List, ListItem, Flex} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import React from "react";

function NavMobile() {
  return (
    <Flex as="nav" display={{base: "initial", lg: "none", xl: "none", "2xl": "none"}} fontWeight={500}>
        <List display="flex" flexDirection="column" alignItems="center"  bgColor="orange.500" borderColor="orange.300">
        <ListItem _hover={{color: "orange.500"}} display="flex" justifyContent="center" alignItems="center" w="100vw" h="6vh" borderBottom="2px" borderColor="orange.300" bgColor="orange.200">
          <NavLink to="/">HOME</NavLink>
        </ListItem>
        <ListItem _hover={{color: "orange.500"}} display="flex" justifyContent="center" alignItems="center" w="100vw" h="6vh" borderBottom="2px" borderColor="orange.300" bgColor="orange.200">
          <NavLink to="about">ABOUT</NavLink>
        </ListItem>
        <ListItem _hover={{color: "orange.500"}} display="flex" justifyContent="center" alignItems="center" w="100vw" h="6vh" borderBottom="2px" borderColor="orange.400" bgColor="orange.200">
          <NavLink to="resume">RESUME</NavLink>
        </ListItem>
        <ListItem _hover={{color: "orange.500"}} display="flex" justifyContent="center" alignItems="center" w="100vw" h="6vh" borderBottom="2px" borderColor="orange.400" bgColor="orange.200">
          <NavLink to="portfolio">PORTFOLIO</NavLink>
        </ListItem>
        </List>
    </Flex>
  );
}

export default NavMobile;