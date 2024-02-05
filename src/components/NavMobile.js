import { List, ListItem, Flex} from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";

function NavMobile() {
  return (
    <Flex as="nav" display={{base: "initial", lg: "none", xl: "none", "2xl": "none"}} fontWeight={500}>
        <List display="flex" flexDirection="column" alignItems="center" bg="secondary.100" w="100vw" paddingY={1}>
        <ListItem bgColor="transparent" _hover={{bgColor: "secondary.200", borderRadius: 50 }} display="flex" justifyContent="center" alignItems="center" w="80vw" h="6vh" >
          <Link to="/" spy={true} smooth={true} offset={0} duration={300}>Home</Link>
        </ListItem>
        <ListItem bgColor="transparent" _hover={{bgColor: "secondary.200", borderRadius: 50 }} display="flex" justifyContent="center" alignItems="center" w="80vw" h="6vh" >
          <Link to="about" spy={true} smooth={true} offset={-50} duration={300}>About</Link>
        </ListItem>
        <ListItem bgColor="transparent" _hover={{bgColor: "secondary.200", borderRadius: 50 }} display="flex" justifyContent="center" alignItems="center" w="80vw" h="6vh" >
          <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={300}>Portfolio</Link>
        </ListItem>
        <ListItem bgColor="transparent" _hover={{bgColor: "secondary.200", borderRadius: 50 }} display="flex" justifyContent="center" alignItems="center" w="80vw" h="6vh" >
          <Link to="contact" spy={true} smooth={true} offset={50} duration={600}>Contact</Link>
        </ListItem>
        </List>
    </Flex>
  );
}

export default NavMobile;