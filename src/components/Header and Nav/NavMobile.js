import { List, ListItem, Flex} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink className="navlink" to="/" onClick={handleLinkClick}>Home</NavLink>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" marginY={5}>
          <NavLink className="navlink" to="about" onClick={handleLinkClick}>About</NavLink>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" marginY={5}>
          <NavLink className="navlink" to="portfolio" onClick={handleLinkClick}>Portfolio</NavLink>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" marginY={5}>
          <NavLink className="navlink" to="contact" onClick={handleLinkClick}>Contact</NavLink>
        </ListItem>
        </List>
    </Flex>
  );
}

export default NavMobile;