import React from "react";
import MyPhoto from "./../../photos/myphoto.jpg"
import { Flex, Image, Text, Heading, HStack} from "@chakra-ui/react"

function About() {
  return (
    <Flex as="article" padding={100}>
        <Image src={MyPhoto} maxWidth={250}></Image>
        <HStack marginLeft={10} flexDirection="column" alignItems="left">
            <Text align="left">About me</Text>
            <Heading>Self-Taught Front-End Developer</Heading>
            <Text maxWidth={500} borderRadius={100}>Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...</Text>
        </HStack>
    </Flex>
  );
}

export default About;