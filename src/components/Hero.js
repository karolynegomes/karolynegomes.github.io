import React from "react";
import { Heading, Text, Image, Flex, Button } from "@chakra-ui/react";
import MyPhoto from "./../photos/myphotowithoutbackground.png"
import Stripe from "../photos/stripe.png";
import { Link } from "react-scroll";

function downloadCV() {

  // Path or URL of your PDF document
  const pdfUrl = process.env.PUBLIC_URL + "/Karolyne_Gomes_da_Mota_Frontend_Developer.pdf"

  // Anchor element
  const a = document.createElement("a");

  // Set the href attribute with the PDF URL
  a.href = pdfUrl;

  // Set the download attribute with the desired file name
  a.download = "Karolyne_Gomes_da_Mota_Frontend_Developer.pdf";

  // Append the anchor to the body
  document.body.appendChild(a);

  // Trigger a click on the anchor element
  a.click();

  // Remove the anchor from the body
  document.body.removeChild(a);
  }

function Hero() {

  return (
    <Flex as="article" id="hero" bg="#FFFFFF" width="100%" justifyContent="center">
       <Flex alignItems={{base: "center", lg: "flex-end"}} flexDir={{base: "column", lg: "row"}} maxWidth={1500} position="relative" w="100%">
        <Flex as="section" flexDirection="column" justifyContent="space-between" alignItems="left" w={{base: "90%", lg: "70%"}} h="100%">
          <Flex flexDir="column" justifyContent="center" marginX={{base: "5", lg:"75", xl: "100", "2xl": "100"}} h="80%" marginY={{base: 0, lg: 5}}>
            <Flex>
            <Text className="typewriter" zIndex={20} marginTop={10} marginLeft={2} fontSize={{base: "md", md: "lg", lg:"2xl"}} color="text.950" letterSpacing="2px">Nice to meet you!</Text>
            </Flex>
            <Heading zIndex={20} size={{base: "2xl", sm: "3xl"}} color="text.950">My name is<Heading as="span" size={{base: "2xl", sm: "3xl"}} bgGradient="linear(to-l, #eb984a, #ed4946)" bgClip="text" fontStyle="italic"> Karolyne</Heading><br/> and I am a Front-End developer.</Heading>
            <Text color="text.900" marginY={5} fontSize={{base: "lg", md: "xl"}}>Thriving on turning ideas into reality. Just let me know what you need, and together we can bring your vision to life!</Text>
          </Flex>
          <Flex flexDir={{base: "column", md: "row"}} alignItems="center" marginX={{base: "5", lg:"75", xl: "100"}} marginBottom={10} justifyContent={{base: "center", lg: "flex-start"}} zIndex={30}>
            <Button margin={5} size='md' backgroundColor="primary.200" color="text.950" _hover={{backgroundColor: "accent.400", color:"white"}} onClick={downloadCV}>Download my CV</Button>
            <Button as={Link} to="contact" spy={true} smooth={true} offset={-200} duration={2500} margin={5} backgroundColor="primary.200" color="text.950" _hover={{backgroundColor: "accent.400", color:"white"}}>Hire me</Button>
          </Flex>
        </Flex>
        <Flex as="figure" w={{base: "90%", lg: "30%"}} alignItems="end" justifyContent="center" marginTop={{base: 50, lg: 120}} marginRight={5} position="relative">
          <Image alt="decoration"  className="stripe" src={Stripe} position="relative" zIndex={10} maxWidth="100%" maxHeight="100%"/>
          <Image alt="Karolyne photo" src={MyPhoto} position="absolute" zIndex={20} maxWidth="100%" maxHeight="100%"/>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Hero;