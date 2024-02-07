import { List, ListItem, Flex} from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";

function NavMobile() {
  return (
    <Flex as="nav" display={{base: "initial", lg: "none", xl: "none", "2xl": "none"}} fontWeight={500}>
        <List display="flex" flexDirection="column" alignItems="center">
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" h="6vh" >
          <Link to="/" spy={true} smooth={true} offset={0} duration={300}>Home</Link>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" h="6vh" >
          <Link to="about" spy={true} smooth={true} offset={-300} duration={300}>About</Link>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" h="6vh" >
          <Link to="portfolio" spy={true} smooth={true} offset={-375} duration={300}>Portfolio</Link>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" h="6vh" >
          <Link to="contact" spy={true} smooth={true} offset={-400} duration={600}>Contact</Link>
        </ListItem>
        </List>
    </Flex>
  );
}

export default NavMobile;