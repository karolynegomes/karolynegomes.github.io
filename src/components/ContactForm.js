import React from "react";
 import { Flex, Heading, FormLabel, FormControl, Input, Textarea, Button, Text, Icon, Link, Box } from "@chakra-ui/react";
 import { EmailIcon } from "@chakra-ui/icons";
 import { BsFillPinAngleFill } from "react-icons/bs";
import Wave from 'react-wavify'

function ContactForm() {

  return (
    <Flex flexDir="column">
    <Wave fill="#f5cba3" paused={false} style={{ display: 'flex', height: "10vh", backgroundColor: "#fae5d1"}} options={{height: 40, amplitude: 20, speed: 0.2, points: 5}}/>
  <Flex as="article" id="contact" flexDir="column" backgroundColor="primary.200" width="100%" alignItems="center">
    <Flex w="100%" marginY={10} flexDir="column" alignItems="center" maxWidth={1500}>
        <Text align="left" color="text.950"><Icon color="accent.500" as={BsFillPinAngleFill}></Icon> Find me</Text>
        <Heading size="lg" color="text.950">GET IN TOUCH TODAY!</Heading>
                <Flex flexDir="column" padding={5} w="100%">
                    <Flex paddingX={{base: 1, sm: 10}} borderRadius={5}>
                        <Flex flexDir="column" alignItems="center" padding={2} marginY={5} borderRadius={5} w="100%">
                            <Text>If you want to get in touch, talk about a project collaboration or just connect, fill up form below or send an email to:</Text><br/>
                            <Link href="mailto:karolynegomesdamota@gmail.com" color="primary.600" _hover={{ color: "accent.500"}}><b>karolynegomesdamota@gmail.com</b></Link>
                        </Flex>
                    </Flex>
                    <Flex flexDir="column" paddingX={{base: 1, sm: 10}}>
                        <Flex justifyContent="space-between" flexDir={{base: "column", lg: "row"}}>
                        <FormControl marginY={3} marginX={{base: 0, lg: 3}} isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="Type your name here" variant='filled' backgroundColor="secondary.50"></Input>
                        </FormControl>
                        <FormControl marginY={3} marginX={{base: 0, lg: 3}} isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input placeholder="example@email.com" type='email' variant='filled' backgroundColor="secondary.50"></Input>
                        </FormControl>
                        </Flex>
                        <Flex justifyContent="space-between" flexDir={{base: "column", lg: "row"}}>
                        <FormControl marginY={3} marginX={{base: 0, lg: 3}}>
                            <FormLabel>Phone number</FormLabel>
                            <Input placeholder="+358 12 345 6789" variant='filled' backgroundColor="secondary.50"></Input>
                        </FormControl>
                        <FormControl marginY={3} marginX={{base: 0, lg: 3}} isRequired>
                            <FormLabel>Subject</FormLabel>
                            <Input placeholder="Type the subject here" variant='filled' backgroundColor="secondary.50"></Input>
                        </FormControl>
                        </Flex>
                        <Flex justifyContent="space-between" flexDir={{base: "column", lg: "row"}}>
                        <FormControl marginY={3} marginX={{base: 0, lg: 3}} flexDir={{base: "column", lg: "row"}}>
                            <FormLabel>Message</FormLabel>
                            <Textarea placeholder="Type your message here" variant='filled' backgroundColor="secondary.50"></Textarea>
                        </FormControl>
                        <Flex justifyContent="center" alignItems="end">
                        <Button margin={5} maxWidth="fit-content" backgroundColor="primary.300" color="text.950" _hover={{backgroundColor: "accent.400", color:"white"}} leftIcon={<EmailIcon />} variant='solid'>Send message</Button>
                        </Flex>
                        </Flex>
                    </Flex>
                </Flex>
    </Flex>
</Flex>
</Flex>
  );
}

export default ContactForm;