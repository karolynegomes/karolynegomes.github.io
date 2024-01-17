import React from "react";
import { Image, Text, Heading, Card, CardBody, Stack, Center, Button, Flex, Icon} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt} from "react-icons/fa";

function PortfolioCard(props) {
  return (
    <>
    {props.cards.map((card) => (
    <Card
    backgroundColor="orange.50" _hover={{backgroundColor: "orange.100"}} h="100%" key={card.id}>
        <CardBody>
            <Image src={card.photo} borderRadius={5}></Image>
            <Stack margin={2}>
                <Center>
                    <Heading>{card.name}</Heading>
                </Center>
                <Text margin={3} fontStyle="italic" overflow="auto">{card.description}</Text>
                <Flex justifyContent="center" gap={10}>
                  <Button backgroundColor="orange.200" _hover={{backgroundColor: "orange.400", color: "white"}}>Code <Icon as={FaGithub} margin={1}/></Button>
                  <Button backgroundColor="orange.200" _hover={{backgroundColor: "orange.400", color: "white"}}>Live Demo <Icon as={FaExternalLinkAlt} margin={1}/></Button>
                </Flex>
            </Stack>
        </CardBody>
    </Card>
    ))}
    </>
  );
}

export default PortfolioCard;