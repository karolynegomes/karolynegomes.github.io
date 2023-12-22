import React from "react";
import { Center, Heading, Grid, GridItem, Flex, Text, Box} from "@chakra-ui/react";
import PortfolioCard from "./PortfolioCard"

function Portfolio() {

  const name = [
    "Proyect 1",
    "Proyect 2",
    "Proyect 3",
    "Proyect 4",
    "Proyect 5",
    "Proyect 6"
];

  const description = [
    "This is my project description. This is my project description. This is my project description.",
    "This is another option. This is another option. This is another option.",
    "Another example. Another example. Another example.",
    "This would be my fourth project. This would be my fourth project.",
    "Random text. Random text. Random text. Random text.",
    "This is my final option. This is my final option. This is my final option."
  ];

  return (
    <Flex as="article" flexDirection="column">
        <Center>
            <Box>
                <Text align="center">My projects</Text>
                <Heading>VISIT MY PORTFOLIO</Heading>
            </Box>
        </Center>
        <Grid templateColumns='repeat(6, 1fr)' gap={10} padding={100}>
            <GridItem colSpan={{ base: 6, lg: 3, xl: 2}}>
                <PortfolioCard name={name[0]} description={description[0]}/>
            </GridItem>
            <GridItem colSpan={{ base: 6, lg: 3, xl: 2}}>
                <PortfolioCard name={name[1]} description={description[1]}/>
            </GridItem>
            <GridItem colSpan={{ base: 6, lg: 3, xl: 2}}>
                <PortfolioCard name={name[2]} description={description[2]}/>
            </GridItem>
            <GridItem colSpan={{ base: 6, lg: 3, xl: 2}}>
                <PortfolioCard name={name[3]} description={description[3]}/>
            </GridItem>
            <GridItem colSpan={{ base: 6, lg: 3, xl: 2}}>
                <PortfolioCard name={name[4]} description={description[4]}/>
            </GridItem>
            <GridItem colSpan={{ base: 6, lg: 3, xl: 2}}>
                <PortfolioCard name={name[5]} description={description[5]}/>
            </GridItem>
        </Grid>
    </Flex>
  );
}

export default Portfolio;