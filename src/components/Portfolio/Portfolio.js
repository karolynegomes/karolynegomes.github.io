import React from "react";
import { Center, Heading, Grid, GridItem, Flex, Text, Icon } from "@chakra-ui/react";
import PortfolioCard from "./PortfolioCard";
import { BsFillPinAngleFill } from "react-icons/bs";
import Wave from 'react-wavify';
import { ScrollRestoration } from "react-router-dom";

function Portfolio() {

  const cards = [
    {
        id: 1,
        name: "Proyect 1",
        description: "Description...",
        photo: "/randombanana.avif",
        alt: "project1photo"
    },
    {
        id: 2,
        name: "Proyect 2",
        description: "Description...",
        photo: "/randombanana.avif",
        alt: "project2photo"
    },
    {
        id: 3,
        name: "Proyect 3",
        description: "Description...",
        photo: "/randombanana.avif",
        alt: "project3photo"
    },
    {
        id: 4,
        name: "Proyect 4",
        description: "Description...",
        photo: "/randombanana.avif",
        alt: "project4photo"
    },
    {
        id: 5,
        name: "Proyect 5",
        description: "Description...",
        photo: "/randombanana.avif",
        alt: "project5photo"
    },
    {
        id: 6,
        name: "Proyect 6",
        description: "Description...",
        photo: "/randombanana.avif",
        alt: "project6photo"
    }];

  return (
    <>
    <ScrollRestoration/>
        <Flex flexDir="column" id="portfolio" as="article" bg="#FCFAF5">
            <Flex justifyContent="center" minH="80vh" >
                <Flex flexDirection="column" maxWidth={1500} paddingY={{base: "10", sm: "20"}}>
                <Center as="section">
                    <Flex flexDir="column" alignItems="center">
                        <Text align="center"><Icon color="accent.500" as={BsFillPinAngleFill}></Icon> My projects</Text>
                        <Heading align="center">Visit my portfolio</Heading>
                        <Text marginTop={5} w="80%">Every project is a fresh canvas, an opportunity to craft solutions, navigate challenges, and unveil the true potential of creativity and determination.</Text>
                    </Flex>
                </Center>
                <Grid as="section" templateColumns='repeat(6, 1fr)' gap="10" padding={{base: 10, md: 20}} justifyContent="center">
                    {Array.from({ length: 6 }).map((_, index) => (
                    <GridItem key={index} colSpan={{ base: 6, md: 3, lg: 3, xl: 2}}>
                        <PortfolioCard cards={[cards[index]]}/>
                    </GridItem>
                    ))}
                </Grid>
                </Flex>
            </Flex>
        </Flex>
  </>
  );
}

export default Portfolio;