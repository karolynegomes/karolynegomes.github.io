import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Heading, Text, List, ListItem, Grid, GridItem} from "@chakra-ui/react";
import { PhoneIcon, Icon} from "@chakra-ui/icons";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <Grid as="footer" backgroundColor="black" padding={55} templateColumns='repeat(4, 1fr)' gap={5}>
      <GridItem colSpan={{ base: 4, md: 2, lg: 2, xl: 2}}>
        <Flex>
          <Heading color="white">karolyne</Heading>
          <Heading color="orange.300">.dev</Heading>
        </Flex>
        <Text color="white">At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati.</Text>
        <Text color="white">karolynegomesdamota@gmail.com</Text>
      </GridItem>
      <GridItem colSpan={{ base: 4, sm: 2, md: 1, lg: 1, xl: 1}} display={{md: "flex", lg: "flex", xl: "flex", "2xl": "flex"}} flexDir="column" alignItems="center">
        <Heading size="md" marginBottom={5} color="white">Explore</Heading>
        <List display="flex" flexDirection="column">
          <ListItem color="white" _hover={{color: "orange.300"}}>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem color="white" _hover={{color: "orange.300"}}>
            <NavLink to="about">About</NavLink>
          </ListItem>
          <ListItem color="white" _hover={{color: "orange.300"}}>
            <NavLink to="resume">Resume</NavLink>
          </ListItem>
          <ListItem color="white" _hover={{color: "orange.300"}}>
            <NavLink to="portfolio">Portfolio</NavLink>
          </ListItem>
        </List>
      </GridItem>
      <GridItem colSpan={{ base: 4, sm: 2, md: 1, lg: 1, xl: 1}}>
        <Heading size="md" marginBottom={5} color="white">Find me</Heading>
          <Flex>
            <PhoneIcon color="orange.300" margin={1}/>
            <Text color="white" margin={1}>+358 41 311 7484</Text>
          </Flex>
          <Flex>
            <Icon color="orange.300" as={FaLocationDot} margin={1}/>
            <Text color="white" margin={1}>Espoo, Finland</Text>
          </Flex>
      </GridItem>
      </Grid>
  );
}

export default Footer;