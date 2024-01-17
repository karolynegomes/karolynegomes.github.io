import React from "react";
import { Heading, Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import MyPhoto from "./../../photos/myphotowithoutbackground.png"

function Home() {
  return (
    <Flex as="article" id="/" backgroundColor="orange.50" width="100%">
        <Box paddingY={{base: "5", sm: "10", md: "20", lg:"50",xl: "100"}} paddingLeft={{base: "5", sm: "10", md: "20", lg:"50",xl: "100"}} display={{base: "flex"}} paddingRight={{base: "5", sm: "10", md: "20", lg:"0",xl: "0"}} flexDirection="column" alignItems="left">
            <Text fontSize={{base: "xl", sm: "md", md: "lg", lg:"xl",xl: "2xl"}} fontStyle="italic">Nice to meet you!</Text>
            <Heading size={{base: "2xl", sm: "2xl", md: "2xl", lg:"3xl",xl: "4xl"}}>My name is <Heading as="span" size={{base: "2xl", sm: "2xl", md: "2xl", lg:"3xl",xl: "4xl"}} color="orange.300" fontStyle="italic"> Karolyne</Heading> and I am a frontend developer.</Heading>
            <Button maxWidth="fit-content" backgroundColor="orange.300" marginTop={10} _hover={{backgroundColor: "orange.500", color: "white"}}>Download my CV</Button>
        </Box>
        <Box display={{base: "none", sm: "none", md: "none", lg: "flex", xl: "flex"}} alignItems="end" maxHeight={900} paddingX={20}>
            <Image src={MyPhoto} maxHeight={{base: "0", sm: "0", md: "700", lg:"2000",xl: "2000"}}></Image>
        </Box>
    </Flex>
  );
}

export default Home;