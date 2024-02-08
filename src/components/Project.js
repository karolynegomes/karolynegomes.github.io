import React from "react";
import { Flex, Heading, Spinner } from "@chakra-ui/react";
import { ScrollRestoration } from "react-router-dom";

function Project() {

  return (
    <>
      <ScrollRestoration/>
        <Flex id="project" as="article" minH="80vh" justifyContent="center">
          <Flex w="100%" flexDir="column" alignItems="center" justifyContent="center" maxWidth={1500}>
          <Heading>Project coming soon...</Heading>
          <Spinner color="accent.300" marginY={10}/>
          </Flex>
        </Flex>
    </>
  );
}

export default Project;

