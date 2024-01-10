import { HStack, IconButton, List, ListItem, Flex} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import React from "react";

function NavMobile() {
  return (
    <Flex as="nav" display={{base: "initial", lg: "none", xl: "none", "2xl": "none"}}  fontWeight={500} backgroundColor="orange.200" borderBottom="orange.300">
        <List spacing={5} margin={10} display="flex" flexDirection="column" alignItems="center" backgroundColor="orange.200">
        <ListItem _hover={{color: "orange.500"}}>
          <NavLink to="/">Home</NavLink>
        </ListItem>
        <ListItem _hover={{color: "orange.500"}}>
          <NavLink to="about">About</NavLink>
        </ListItem>
        <ListItem _hover={{color: "orange.500"}}>
          <NavLink to="resume">Resume</NavLink>
        </ListItem>
        <ListItem _hover={{color: "orange.500"}}>
          <NavLink to="portfolio">Portfolio</NavLink>
        </ListItem>
        </List>
    </Flex>
  );
}

export default NavMobile;