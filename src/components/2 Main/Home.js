import React from "react";
import { Heading, Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import MyPhoto from "./../../photos/myphoto.png"

function Home() {
  return (
    <Flex as="article" backgroundColor="orange.100" minHeight={700} padding={100}>
        <Box>
            <Text fontSize="2xl">Nice to meet you!</Text>
            <Flex>
                <Heading size="3xl">My name is
                    <Heading size="3xl" color="orange.300" fontStyle="italic">Karolyne</Heading>
                        <Heading size="3xl">and I am a frontend developer.</Heading>
                </Heading>
            </Flex>
            <Button
            backgroundColor="orange.300"
            marginTop={10}
            _hover={{backgroundColor: "orange.500", color: "white"}}>Download my CV</Button>
        </Box>
        <Box>
            <Image src={MyPhoto} borderRadius="full" maxHeight={900}></Image>
        </Box>

    </Flex>
  );
}

export default Home;