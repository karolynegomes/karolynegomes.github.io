import { Flex, List, ListItem} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Nav() {
  return (
    <Flex as="nav"w="30%" display={{base: "none", lg: "initial", xl: "initial", "2xl": "initial"}}>
      <List display="flex" justifyContent="space-between" minWidth={300} fontWeight={500}>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}}>
          <RouterLink className="navlink" to="/">Home</RouterLink>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}}>
          <RouterLink className="navlink" to="about">About</RouterLink>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}}>
          <RouterLink className="navlink" to="portfolio">Portfolio</RouterLink>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}}>
          <RouterLink className="navlink" to="contact">Contact</RouterLink>
        </ListItem>
      </List>
    </Flex>
  );
}

export default Nav;