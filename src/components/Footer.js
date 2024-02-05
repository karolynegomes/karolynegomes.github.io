import React from "react";
import { Flex, Heading, Text, Link, Grid, GridItem} from "@chakra-ui/react";
import { Icon} from "@chakra-ui/icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Flex bg="black" h="10vh" justifyContent="center">
      <Flex justifyContent="space-around" w="100%" maxWidth={1500}>
        <Flex h="100%" alignItems="center">
          <Heading color="text.50" size={{base: "sm", sm: "lg"}}>karolyne</Heading>
          <Heading size={{base: "sm", sm: "lg"}} bgGradient="linear(to-l, #eb984a, #ed4946)" bgClip="text">.dev</Heading>
        </Flex>
        <Flex h="100%" alignItems="center">
          <Link href='https://www.linkedin.com/in/karolynegomes/' isExternal><Icon color="secondary.50" _hover={{color: "secondary.300"}} w={{base: 5, sm: 10}} h={{base: 5, sm: 10}} marginX={3} as={FaLinkedin} margin={1}/></Link>
          <Link href='https://github.com/karolynegomes' isExternal><Icon color="secondary.50" _hover={{color: "secondary.300"}} w={{base: 5, sm: 10}} h={{base: 5, sm: 10}} marginX={3} as={FaGithub} margin={1}/></Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;