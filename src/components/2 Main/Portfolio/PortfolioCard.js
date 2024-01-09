import React from "react";
import { Image, Text, Heading, Card, CardBody, Stack, Center} from "@chakra-ui/react"

function PortfolioCard(props) {
  return (
    <>
    {props.cards.map((card) => (
    <Card
    backgroundColor="orange.50"
    _hover={{background: "orange.100",}}>
        <CardBody key={card.id}>
            <Image src={card.photo}></Image>
            <Stack margin={2}>
                <Center>
                    <Heading>{card.name}</Heading>
                </Center>
                <Text margin={3} fontStyle="italic">{card.description}</Text>
            </Stack>
        </CardBody>
    </Card>
    ))}
    </>
  );
}

export default PortfolioCard;