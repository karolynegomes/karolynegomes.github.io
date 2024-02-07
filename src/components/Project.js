import React from "react";
import { Flex, Heading, Spinner } from "@chakra-ui/react";

function Project() {

  return (
    <Flex id="project" as="article" h="100vh" justifyContent="center">
      <Flex w="100%" flexDir="column" alignItems="center" justifyContent="center" maxWidth={1500}>
      <Heading>Project coming soon...</Heading>
      <Spinner color="accent.300" marginY={10}/>
      </Flex>
    </Flex>
  );
}

export default Project;

