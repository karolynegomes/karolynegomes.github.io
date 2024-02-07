import React from "react";
import { Flex, Heading, Link } from "@chakra-ui/react";
import { Icon} from "@chakra-ui/icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <Flex as="footer" bg="background.950" h="10vh" justifyContent="center">
      <Flex justifyContent="space-around" w="100%" maxWidth={1500}>
      <RouterLink className="navlink" to="/">
        <Flex as="figure" h="100%" alignItems="center">
            <Heading color="text.50" size={{base: "md", sm: "lg"}}>karolyne</Heading>
            <Heading size={{base: "md", sm: "lg"}} bgGradient="linear(to-l, #eb984a, #ed4946)" bgClip="text">.dev</Heading>
        </Flex>
      </RouterLink>
        <Flex as="section" h="100%" alignItems="center">
          <Link href='https://www.linkedin.com/in/karolynegomes/' isExternal><Icon color="secondary.50" _hover={{color: "secondary.300"}} w={{base: 8, sm: 10}} h={{base: 8, sm: 10}} marginX={3} as={FaLinkedin} margin={1}/></Link>
          <Link href='https://github.com/karolynegomes' isExternal><Icon color="secondary.50" _hover={{color: "secondary.300"}} w={{base: 8, sm: 10}} h={{base: 8, sm: 10}} marginX={3} as={FaGithub} margin={1}/></Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;