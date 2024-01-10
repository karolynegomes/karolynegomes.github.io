import React from "react";
import { Center, Heading, Grid, GridItem, Flex, Text, Box} from "@chakra-ui/react";
import PortfolioCard from "./PortfolioCard"

function Portfolio() {
  const cards = [
    {
        id: 1,
        name: "Proyect 1",
        description: "This is my project description. This is my project description. This is my project description.",
        photo: "/randombanana.avif"
    },
    {
        id: 2,
        name: "Proyect 2",
        description: "This is another option. This is another option. This is another option.",
        photo: "/randombanana.avif"
    },
    {
        id: 3,
        name: "Proyect 3",
        description: "Another example. Another example. Another example.",
        photo: "/randombanana.avif"
    },
    {
        id: 4,
        name: "Proyect 4",
        description: "This would be my fourth project. This would be my fourth project.",
        photo: "/randombanana.avif"
    },
    {
        id: 5,
        name: "Proyect 5",
        description: "Random text. Random text. Random text. Random text.",
        photo: "/randombanana.avif"
    },
    {
        id: 6,
        name: "Proyect 6",
        description: "This is my final option. This is my final option. This is my final option.",
        photo: "/randombanana.avif"
    }];

  return (
    <Flex as="article" flexDirection="column">
        <Center>
            <Box>
                <Text align="center">My projects</Text>
                <Heading align="center">VISIT MY PORTFOLIO</Heading>
            </Box>
        </Center>
        <Grid zIndex="-1" templateColumns='repeat(6, 1fr)' gap={10} padding={100} justifyContent="center">
            {Array.from({ length: 6 }).map((_, index) => (
            <GridItem key={index} colSpan={{ base: 6, lg: 3, xl: 2}}>
                <PortfolioCard cards={[cards[index]]}/>
            </GridItem>
            ))}
        </Grid>
    </Flex>
  );
}

export default Portfolio;