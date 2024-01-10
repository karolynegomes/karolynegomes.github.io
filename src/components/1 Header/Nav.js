import { Flex, List, ListItem} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import React from "react";

function Nav() {
  return (
    <Flex as="nav" display={{base: "none", lg: "initial", xl: "initial", "2xl": "initial"}}>
      <List display="flex" justifyContent="space-between" minWidth={300} fontWeight={500}>
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

export default Nav;