import React from "react";
import { Heading, Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import MyPhoto from "./../../photos/myphotowithoutbackground.png"

function Home() {
  return (
    <Flex as="article" backgroundColor="orange.50" paddingLeft={100} paddingRight={100} paddingTop={100}>
        <Box>
            <Text fontSize="4xl">Nice to meet you!</Text>
            <Flex>
                <Heading size="4xl">My name is
                    <Heading size="4xl" color="orange.300" fontStyle="italic">Karolyne</Heading>
                        <Heading size="4xl">and I am a frontend developer.</Heading>
                </Heading>
            </Flex>
            <Button
            backgroundColor="orange.300"
            marginTop={10}
            _hover={{backgroundColor: "orange.500", color: "white"}}>Download my CV</Button>
        </Box>
        <Box display="flex" alignItems="end">
            <Image src={MyPhoto} maxHeight={900}></Image>
        </Box>

    </Flex>
  );
}

export default Home;