import React from "react";
import { Center, Heading, Grid, GridItem, Flex, Text, Icon } from "@chakra-ui/react";
import PortfolioCard from "./PortfolioCard";
import { BsFillPinAngleFill } from "react-icons/bs";
import { useState } from "react";
import Wave from 'react-wavify'

function Portfolio() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
      };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
      };

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
    <Flex flexDir="column">
    <Flex as="article" id="portfolio" justifyContent="center" bg="primary.100" paddingTop={70}>
        <Flex flexDirection="column" maxWidth={1500}>
        <Center>
            <Flex flexDir="column" alignItems="center">
                <Text align="center"><Icon color="accent.500" as={BsFillPinAngleFill}></Icon> My projects</Text>
                <Heading align="center">VISIT MY PORTFOLIO</Heading>
                <Text marginTop={5} w="80%">Every project is a fresh canvas, an opportunity to craft solutions, navigate challenges, and unveil the true potential of creativity and determination.</Text>
            </Flex>
        </Center>
        <Grid templateColumns='repeat(6, 1fr)' gap="10" padding={{base: 10, md: 20}} justifyContent="center">
            {Array.from({ length: 6 }).map((_, index) => (
            <GridItem key={index} colSpan={{ base: 6, md: 3, lg: 3, xl: 2}}>
                <PortfolioCard cards={[cards[index]]}/>
            </GridItem>
            ))}
        </Grid>
        </Flex>
    </Flex>
    <Wave fill="#f5cba3" paused={false} style={{ display: 'flex', height: "10vh", backgroundColor: "#fae5d1"}} options={{height: 40, amplitude: 20, speed: 0.2, points: 4}}/>
    </Flex>
  );
}

export default Portfolio;