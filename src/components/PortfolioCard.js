import { Image, Text, Heading, Card, CardBody, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function PortfolioCard(props) {


  return (
    <>
{props.cards.map((card) => (

  <Link to="/project" key={card.id}>
    <Card border="2px" borderColor="transparent" borderRadius={5} bgColor="secondary.50" _hover={{border: "2px", borderColor:"text.950"}}  >
      <Image src={card.photo} alt={card.alt} borderTopRadius={5}/>
          <Flex flexDir="column" margin={10}>
            <Heading size={{base: "xs", sm: "lg"}} color="text.950">{card.name}</Heading>
            <Text>{card.description}</Text>
          </Flex>
      </Card>
    </Link>
))}

    </>
  );
}

export default PortfolioCard;