import { List, ListItem, Flex} from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";

function NavMobile() {
  return (
    <Flex as="nav" display={{base: "initial", lg: "none", xl: "none", "2xl": "none"}} fontWeight={500}>
        <List display="flex" flexDirection="column" alignItems="center"  bgColor="orange.500" borderColor="orange.300">
        <ListItem _hover={{color: "orange.500"}} display="flex" justifyContent="center" alignItems="center" w="100vw" h="4vh" borderBottom="2px" borderColor="orange.300" bgColor="orange.200">
          <Link to="/" spy={true} smooth={true} offset={0} duration={300}>Home</Link>
        </ListItem>
        <ListItem _hover={{color: "orange.500"}} display="flex" justifyContent="center" alignItems="center" w="100vw" h="4vh" borderBottom="2px" borderColor="orange.300" bgColor="orange.200">
          <Link to="about" spy={true} smooth={true} offset={-50} duration={300}>About</Link>
        </ListItem>
        <ListItem _hover={{color: "orange.500"}} display="flex" justifyContent="center" alignItems="center" w="100vw" h="4vh" borderBottom="2px" borderColor="orange.300" bgColor="orange.200">
          <Link to="resume" spy={true} smooth={true} offset={50} duration={300}>Resume</Link>
        </ListItem>
        <ListItem _hover={{color: "orange.500"}} display="flex" justifyContent="center" alignItems="center" w="100vw" h="4vh" borderBottom="2px" borderColor="orange.300" bgColor="orange.200">
          <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={300}>Portfolio</Link>
        </ListItem>
        </List>
    </Flex>
  );
}

export default NavMobile;