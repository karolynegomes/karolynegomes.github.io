import React from "react";
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import { Flex } from "@chakra-ui/react";

function Home() {
  return (
    <Flex flexDirection="column" width="100%">
      <Hero/>
      <About/>
      <Portfolio/>
      <ContactForm/>
    </Flex>
  );
}

export default Home;