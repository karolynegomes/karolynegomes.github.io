import React from "react";
import { Heading, Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import MyPhoto from "./../../photos/myphotowithoutbackground.png"

function Home() {
  return (
    <Flex as="article" backgroundColor="orange.50">
        <Box padding={{base: "100", sm: "75", md: "100", lg:"100",xl: "100"}} paddingRight={{base: "100", sm: "0", md: "0", lg:"0",xl: "0"}}>
            <Text fontSize={{base: "2xl", sm: "md", md: "lg", lg:"xl",xl: "2xl"}}>Nice to meet you!</Text>
            <Flex>
                <Heading size={{base: "4xl", sm: "xl", md: "2xl", lg:"3xl",xl: "4xl"}}>My name is
                    <Heading size={{base: "4xl", sm: "xl", md: "2xl", lg:"3xl",xl: "4xl"}} color="orange.300" fontStyle="italic">Karolyne</Heading> and I am a frontend developer.</Heading>
            </Flex>
            <Button
            backgroundColor="orange.300"
            marginTop={10}
            _hover={{backgroundColor: "orange.500", color: "white"}}>Download my CV</Button>
        </Box>
        <Box display={{base: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex"}} alignItems="end" maxHeight={900}>
            <Image src={MyPhoto} maxHeight={{base: "0", sm: "600", md: "700", lg:"800",xl: "900"}}></Image>
        </Box>
    </Flex>
  );
}

export default Home;