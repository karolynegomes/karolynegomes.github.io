import { Flex, List, ListItem} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <Flex as="nav" w="30%" display={{base: "none", lg: "initial", xl: "initial", "2xl": "initial"}}>
      <List display="flex" justifyContent="space-between" minWidth={300} fontWeight={500}>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} >
          <NavLink className="navlink" to="/">Home</NavLink>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}}>
          <NavLink className="navlink" to="about">About</NavLink>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}}>
          <NavLink className="navlink" to="portfolio">Portfolio</NavLink>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}}>
          <NavLink className="navlink" to="contact">Contact</NavLink>
        </ListItem>
      </List>
    </Flex>
  );
}

export default Nav;