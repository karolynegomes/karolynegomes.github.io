import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio/Portfolio";
import ContactForm from "../components/ContactForm";
import { Flex } from "@chakra-ui/react";
import { ScrollRestoration } from "react-router-dom";

function Home() {
  return (
    <>
    <ScrollRestoration/>
    <Flex as="main" flexDirection="column" width="100%">
      <Hero/>
      <About/>
      <Portfolio/>
      <ContactForm/>
    </Flex>
    </>
  );
}

export default Home;