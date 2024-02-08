import { React, useRef, useState } from 'react';
import { Flex, Heading, FormLabel, FormControl, Input, Textarea, Button, Text, Icon, Link, Alert, AlertIcon, Spinner, CloseButton, useDisclosure} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { BsFillPinAngleFill } from "react-icons/bs";
import Wave from 'react-wavify';
import emailjs from '@emailjs/browser';
import { ScrollRestoration } from "react-router-dom";

function ContactForm() {

    const form = useRef();

    const [formStatus, setFormStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const closeAlert = () => {
        setFormStatus(null);
        setLoading(false);
      };

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs
      .sendForm('service_917g05m', 'template_pcz4xex', form.current, {
        publicKey: 'wO6gHwP9Nw5byrU6z',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormStatus('success');
          setLoading(false);
          e.target.reset();

        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormStatus('error');
          setLoading(false);
        },
      );
  };

  return (

    <>
        <ScrollRestoration/>
            <Flex flexDir="column" as="article" id="contact">
                <Flex flexDir="column" backgroundColor="primary.200" width="100%" alignItems="center" minH="80vh">
                    <Flex w="100%" paddingY={{base: "10", sm: "20"}} flexDir="column" alignItems="center" maxWidth={1500}>
                        <Flex flexDir="column" alignItems="center">
                            <Text align="left" color="text.950"><Icon color="accent.500" as={BsFillPinAngleFill}></Icon> Find me</Text>
                            <Heading size="lg" color="text.950">GET IN TOUCH TODAY!</Heading>
                        </Flex>
                        <Flex flexDir="column" padding={5} w="100%">
                            <Flex as="section" paddingX={{base: 1, sm: 10}} borderRadius={5}>
                                <Flex flexDir="column" alignItems="center" padding={2} marginY={5} borderRadius={5} w="100%">
                                    <Text>If you want to get in touch, talk about a project collaboration or just connect, fill up form below or send an email to:</Text><br/>
                                    <Link href="mailto:karolynegomesdamota@gmail.com" color="text.950" _hover={{ color: "accent.500"}}><b>karolynegomesdamota@gmail.com</b></Link>
                                </Flex>
                            </Flex>
                            <Flex as="form" flexDir="column" paddingX={{base: 1, sm: 10}} ref={form} onSubmit={sendEmail}>
                                <Flex justifyContent="space-between" flexDir={{base: "column", lg: "row"}}>
                                    <FormControl marginY={3} marginX={{base: 0, lg: 3}} isRequired>
                                        <FormLabel>Name</FormLabel>
                                        <Input type="text" name="user_name" placeholder="Type your name here" backgroundColor="secondary.50" focusBorderColor='text.950' isInvalid errorBorderColor='red.300'></Input>
                                    </FormControl>
                                    <FormControl marginY={3} marginX={{base: 0, lg: 3}} isRequired>
                                        <FormLabel>Email address</FormLabel>
                                        <Input type="email" name="user_email" placeholder="example@email.com" backgroundColor="secondary.50" focusBorderColor='background.400' isInvalid errorBorderColor='red.300'></Input>
                                    </FormControl>
                                </Flex>
                                <Flex justifyContent="space-between" flexDir={{base: "column", lg: "row"}}>
                                    <FormControl marginY={3} marginX={{base: 0, lg: 3}}>
                                        <FormLabel>Phone number</FormLabel>
                                        <Input type="tel" name="user_phone" placeholder="+358 12 345 6789" backgroundColor="secondary.50" focusBorderColor='background.400' isInvalid errorBorderColor='red.300'></Input>
                                    </FormControl>
                                    <FormControl marginY={3} marginX={{base: 0, lg: 3}} isRequired>
                                        <FormLabel>Subject</FormLabel>
                                        <Input type="text" name="user_subject" placeholder="Type the subject here" backgroundColor="secondary.50" focusBorderColor='background.400' isInvalid errorBorderColor='red.300'></Input>
                                    </FormControl>
                                </Flex>
                                <Flex justifyContent="space-between" flexDir={{base: "column", lg: "row"}}>
                                    <FormControl marginY={3} marginX={{base: 0, lg: 3}} flexDir={{base: "column", lg: "row"}}>
                                        <FormLabel>Message</FormLabel>
                                        <Textarea type="message" name="message" placeholder="Type your message here" backgroundColor="secondary.50" focusBorderColor='background.400' isInvalid errorBorderColor='red.300'></Textarea>
                                    </FormControl>
                                    <Flex justifyContent="center" alignItems="end">
                                        <Button type="submit" margin={5} maxWidth="fit-content" backgroundColor="primary.300" color="text.950" _hover={{backgroundColor: "accent.400", color:"white"}} leftIcon={<EmailIcon />} variant='solid' isLoading={loading}>
                                            {loading ? <Spinner size="sm" color="white" /> : 'Send message'}
                                        </Button>
                                    </Flex>
                                    {(formStatus === 'success' || formStatus === 'error') && (
                                        <Alert status={formStatus === 'success' ? 'success' : 'error'} borderRadius={10}>
                                            <AlertIcon />
                                            {formStatus === 'success' ? "Message sent. I will get back to you very soon!" : "There was an error processing your message. Please try again or send me an email to karolynegomesdamota@gmail"}
                                            <CloseButton alignSelf='flex-start' position='relative' right={-1} top={-1} onClick={closeAlert}/>
                                        </Alert>
                                    )}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Wave fill="#121007" paused={false} style={{ display: 'flex', height: "10vh", backgroundColor: "#f5cba3"}} options={{height: 40, amplitude: 20, speed: 0.2, points: 4}}/>
            </Flex>
    </>
  );
}

export default ContactForm;