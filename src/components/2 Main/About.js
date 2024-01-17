import React from "react";
import MyPhoto from "./../../photos/myphoto.jpg"
import { Flex, Image, Text, Heading, HStack, Icon} from "@chakra-ui/react"
import { BsFillPinAngleFill } from "react-icons/bs";

function About() {
  return (
    <Flex as="article" id="about" flexDirection={{base: "column", md: "initial"}} padding={{base: "5", sm: "20"}} paddingLeft={{xl: "300", "2xl": "300"}} paddingRight={{xl: "300", "2xl": "300"}}>
        <Image src={MyPhoto} maxWidth={{base: "800", md: "250", lg: "180", xl: "250", "2xl": "175"}} borderRadius={5}/>
        <HStack marginLeft={{base: "0", md: "2", lg: "2", xl: "2"}} padding={{base: "5"}} flexDirection="column" alignItems="left">
            <Text align="left"><Icon color="orange.300" as={BsFillPinAngleFill}></Icon> About me</Text>
            <Heading>Self-Taught Front-End Developer</Heading>
            <Text>I recently finished a Meta Front-End Developer Specialization. Completely self-taught, I thrive on challenges and am enthusiastic about continuous learning. I have a passion for crafting user-friendly interfaces and a commitment to mastering new skills. <br/> <br/> Tell me what you need, and I'll swiftly figure out how to bring your ideas to life.</Text>
        </HStack>
    </Flex>
  );
}

export default About;