import React from "react";
import { Center, Heading, Grid, GridItem, Flex, Text, Box, Icon, Card, CardBody, Image, Stack, IconButton} from "@chakra-ui/react";
import PortfolioCard from "./PortfolioCard";
import { BsFillPinAngleFill } from "react-icons/bs";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

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
    <Flex as="article" id="portfolio" flexDirection="column">
        <Center>
            <Box>
                <Text align="center"><Icon color="orange.300" as={BsFillPinAngleFill}></Icon> My projects</Text>
                <Heading align="center">VISIT MY PORTFOLIO</Heading>
            </Box>
        </Center>
        <Grid templateColumns='repeat(6, 1fr)' gap="10" padding={{md:20}} justifyContent="center" display={{base: "none", sm: "none", md: "grid", lg: "grid", xl: "grid", "2xl": "grid"}} margin={70}>
            {Array.from({ length: 6 }).map((_, index) => (
            <GridItem key={index} colSpan={{ md: 3, lg: 3, xl: 2}}>
                <PortfolioCard cards={[cards[index]]}/>
            </GridItem>
            ))}
        </Grid>
        <Grid templateColumns='repeat(6, 1fr)' paddingY="10" justifyContent="center" display={{base: "grid", sm: "grid", md: "none", lg: "none"}} margin={10}>
            <GridItem colSpan="6" display="flex" alignItems="center">
             <IconButton icon={<ArrowLeftIcon />} onClick={handlePrev} color="orange.300" backgroundColor="transparent" margin={4}/>
                <Card backgroundColor="orange.50" _hover={{background: "orange.100"}} h="30vh">
                    <CardBody>
                        <Image src={cards[currentIndex].photo}></Image>
                        <Stack margin={2}>
                            <Center>
                                <Heading>{cards[currentIndex].name}</Heading>
                            </Center>
                            <Text margin={3} fontStyle="italic">{cards[currentIndex].description}</Text>
                        </Stack>
                    </CardBody>
                </Card>
                <IconButton icon={<ArrowRightIcon />} onClick={handleNext} color="orange.300" backgroundColor="transparent" margin={4}/>
            </GridItem>
        </Grid>
    </Flex>
  );
}

export default Portfolio;