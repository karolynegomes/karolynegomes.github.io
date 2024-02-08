import { List, ListItem, Flex} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

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
          <RouterLink className="navlink" to="/" onClick={handleLinkClick}>Home</RouterLink>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" marginY={5}>
          <RouterLink className="navlink" to="about" onClick={handleLinkClick}>About</RouterLink>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" marginY={5}>
          <RouterLink className="navlink" to="portfolio" onClick={handleLinkClick}>Portfolio</RouterLink>
        </ListItem>
        <ListItem color="text.950" _hover={{bgGradient: "linear(to-l, #eb984a, #ed4946)", bgClip:"text"}} display="flex" justifyContent="center" alignItems="center" marginY={5}>
        <RouterLink className="navlink" to="contact" onClick={handleLinkClick}>Contact</RouterLink>
        </ListItem>
        </List>
    </Flex>
  );
}

export default NavMobile;