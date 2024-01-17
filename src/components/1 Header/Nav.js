import { Flex, List, ListItem} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";

function Nav() {
  return (
    <Flex as="nav" display={{base: "none", lg: "initial", xl: "initial", "2xl": "initial"}}>
      <List display="flex" justifyContent="space-between" minWidth={300} fontWeight={500}>
        <ListItem _hover={{color: "orange.500"}}>
          <Link to="/" spy={true} smooth={true} offset={0} duration={300}>Home</Link>
        </ListItem>
        <ListItem _hover={{color: "orange.500"}}>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={300}>About</Link>
        </ListItem>
        <ListItem _hover={{color: "orange.500"}}>
          <Link to="resume" spy={true} smooth={true} offset={50} duration={300}>Resume</Link>
        </ListItem>
        <ListItem _hover={{color: "orange.500"}}>
          <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={300}>Portfolio</Link>
        </ListItem>
      </List>
    </Flex>
  );
}

export default Nav;