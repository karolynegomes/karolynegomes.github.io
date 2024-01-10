import React from "react";
import MyPhoto from "./../../photos/myphoto.jpg"
import { Flex, Image, Text, Heading, HStack} from "@chakra-ui/react"

function About() {
  return (
    <Flex as="article" flexDirection={{base: "column", md: "initial"}} padding={{base: "10", sm: "20"}} paddingLeft={{xl: "300", "2xl": "400"}} paddingRight={{xl: "300", "2xl": "400"}}>
        <Image src={MyPhoto} maxWidth={{base: "800", md: "250", lg: "180", xl: "250", "2xl": "150"}} borderRadius={5}/>
        <HStack marginLeft={{base: "0", md: "2", lg: "2", xl: "2"}} padding={{base: "5"}} flexDirection="column" alignItems="left">
            <Text align="left">About me</Text>
            <Heading>Self-Taught Front-End Developer</Heading>
            <Text>Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...Something about me...</Text>
        </HStack>
    </Flex>
  );
}

export default About;