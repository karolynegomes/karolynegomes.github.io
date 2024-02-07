import { List, ListItem, Flex} from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";

function NavMobile({onLinkClick}) {

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <Flex as="nav" display={{base: "initial", lg: "none", xl: "none", "2xl": "none"}} fontWeight={500}>
        <List display="flex" flexDirection="column" alignItems="center">
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" marginY={5}>
          <Link to="/" onClick={handleLinkClick} spy={true} smooth={true} offset={0} duration={1000}>Home</Link>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" marginY={5}>
          <Link to="about" onClick={handleLinkClick} spy={true} smooth={true} offset={-100} duration={1000}>About</Link>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" marginY={5}>
          <Link to="portfolio" onClick={handleLinkClick} spy={true} smooth={true} offset={-200} duration={1000}>Portfolio</Link>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" marginY={5}>
          <Link to="contact" onClick={handleLinkClick} spy={true} smooth={true} offset={-200} duration={1000}>Contact</Link>
        </ListItem>
        </List>
    </Flex>
  );
}

export default NavMobile;