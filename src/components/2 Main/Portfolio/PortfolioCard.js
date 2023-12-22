import React from "react";
import { Image, Text, Heading, Card, CardBody, Stack, Center} from "@chakra-ui/react"
import RandomBanana from "../../../photos/randombanana.avif"

function PortfolioCard(props) {

  return (
    <Card
    backgroundColor="orange.50"
    _hover={{background: "orange.100",}}>
        <CardBody>
            <Image src={RandomBanana}></Image>
            <Stack margin={2}>
                <Center>
                    <Heading>{props.name}</Heading>
                </Center>
                <Text margin={3} fontStyle="italic">
                    {props.description}
                </Text>
            </Stack>
        </CardBody>
    </Card>
  );
}

export default PortfolioCard;