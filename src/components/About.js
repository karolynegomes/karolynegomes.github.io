import { React }  from "react";
import { Flex, Text, Heading, Icon, Box, Tabs, TabList, Tab, TabPanels, TabPanel} from "@chakra-ui/react"
import { BsFillPinAngleFill } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import Wave from 'react-wavify';
import { ScrollRestoration } from "react-router-dom";

function About() {

  return (
    <>
      <ScrollRestoration/>
        <Flex as="article" id="about" alignItems="center" flexDir="column" minH="80vh" bg="primary.50">
          <Flex alignItems="center" flexDirection="column" padding={{base: "10", sm: "20"}} paddingY={{base: "10", sm: "20"}} maxWidth={1500} borderRadius={10}>
              <Flex flexDirection="column" alignItems="left">
                <Text><Icon color="accent.500" as={BsFillPinAngleFill}></Icon> About me</Text>
                <Heading color="text.950">Exploring who I am</Heading>
                <Tabs variant="solid-rounded" colorScheme="orange" defaultIndex={6}>
                  <TabList display="flex" flexWrap="wrap" marginY={5} border="transparent">
                    <Tab className="tab" margin={1} borderRadius={5} h="fit-content" minWidth="fit-content" backgroundColor="primary.200" color="text.950" _selected={{backgroundColor: "accent.400", color:"white"}} >Background</Tab>
                    <Tab className="tab" margin={1} borderRadius={5} h="fit-content" minWidth="fit-content" backgroundColor="primary.200" color="text.950" _selected={{backgroundColor: "accent.400", color:"white"}} >Passion and journey</Tab>
                    <Tab className="tab" margin={1} borderRadius={5} h="fit-content" minWidth="fit-content" backgroundColor="primary.200" color="text.950" _selected={{backgroundColor: "accent.400", color:"white"}} >Skills</Tab>
                    <Tab className="tab" margin={1} borderRadius={5} h="fit-content" minWidth="fit-content" backgroundColor="primary.200" color="text.950" _selected={{backgroundColor: "accent.400", color:"white"}} >Experience</Tab>
                    <Tab className="tab" margin={1} borderRadius={5} h="fit-content" minWidth="fit-content" backgroundColor="primary.200" color="text.950" _selected={{backgroundColor: "accent.400", color:"white"}}>Goals</Tab>
                    <Tab className="tab" margin={1} borderRadius={5} h="fit-content" minWidth="fit-content" backgroundColor="primary.200" color="text.950" _selected={{backgroundColor: "accent.400", color:"white"}} >Hobbies</Tab>
                    <Tab className="tab" margin={1} borderRadius={5} h="fit-content" minWidth="fit-content" backgroundColor="primary.200" color="text.950" _selected={{backgroundColor: "accent.400", color:"white"}} >All</Tab>
                  </TabList>
                    <TabPanels>
                      <TabPanel>
                        <Text _after={{content: '""', position: "absolute", bottom: 0, left: 5, width: "90%", height: "1px", background:"primary.300", filter: "blur(1px)"}}>
                          <Box as="span" bg="primary.100">
                            I'm Karolyne, a front-end developer with a passion for crafting 🖥️ digital experiences that seamlessly blend utility, beauty, and organization. Born in 🇧🇷 Brazil, raised in 🇪🇸 Spain, and now calling 🇫🇮 Finland home for the past 2~ years, I speak Portuguese, Spanish, and English – with Finnish soon to join the mix.<br/><br/>
                            Despite having a career focused primarily on customer service, I've found that the skills acquired in that field - 🤝 teamwork, 💬 communication, and understanding of 💡 customer needs - seamlessly translate into the world of development.
                          </Box>
                        </Text>
                      </TabPanel>
                      <TabPanel>
                        <Text _after={{content: '""', position: "absolute", bottom: 0, left: 5, width: "90%", height: "1px", background:"primary.300", filter: "blur(1px)"}}>
                          <Box as="span" bg="primary.100">
                            My journey into front-end development is a bit unconventional. After exploring diverse fields like ⚖️ law, 📈 economics, and even a degree in 🕵️‍♀️ Criminology, I stumbled upon the captivating world of front-end development. What drew me in was the opportunity to create things that are not only functional but also beautifully organized – a reflection of my life's obsession. <br/><br/>
                            I embarked on my front-end development path through the Meta Front-end Specialization course. Along the way, I delved into HTML5, CSS, and JavaScript, developing my skills in version control and GitHub as well. I also explored Basic and Advanced React, acquainting myself with Chakra UI. To round out my skill set, I immersed myself in UX and UI design, working with Figma to craft wireframes and prototypes.
                          </Box>
                        </Text>
                      </TabPanel>
                      <TabPanel>
                        <Text _after={{content: '""', position: "absolute", bottom: 0, left: 5, width: "90%", height: "1px", background:"primary.300", filter: "blur(1px)"}}>
                          <Box as="span" bg="primary.100">
                            I embarked on my front-end development path through the Meta Front-end Specialization course. Along the way, I delved into HTML5, CSS, and JavaScript, developing my skills in version control and GitHub as well. I also explored Basic and Advanced React, acquainting myself with Chakra UI. To round out my skill set, I immersed myself in UX and UI design, working with Figma to craft wireframes and prototypes.</Box>
                        </Text>
                      </TabPanel>
                      <TabPanel>
                        <Text _after={{content: '""', position: "absolute", bottom: 0, left: 5, width: "90%", height: "1px", background:"primary.300", filter: "blur(1px)"}}>
                          <Box as="span" bg="primary.100">
                            Despite having a career focused primarily on customer service, I've found that the skills acquired in that field - 🤝 teamwork, 💬 communication, and understanding of 💡 customer needs - seamlessly translate into the world of development.<br/><br/>
                            I am actively exploring opportunities to acquire new 🛠️ skills, advance my 🧠 knowledge, make meaningful ➕ contributions, and engage in collaborative 📂 projects.
                          </Box>
                        </Text>
                      </TabPanel>
                      <TabPanel>
                        <Text _after={{content: '""', position: "absolute", bottom: 0, left: 5, width: "90%", height: "1px", background:"primary.300", filter: "blur(1px)"}}>
                          <Box as="span" bg="primary.100">
                            I am actively exploring opportunities to acquire new 🛠️ skills, advance my 🧠 knowledge, make meaningful ➕ contributions, and engage in collaborative 📂 projects.<br/><br/>
                            I invite you to explore my 📋 portfolio. I would be genuinely grateful to receive your 📝 feedback through the form below, as this will be a fantastic way to refine my coding skills. Whether you're here for 💬 collaboration opportunities or just to 🤝 connect, feel free to reach out – I'm ready for the next exciting chapter in my front-end development 🚀 journey!
                          </Box>
                        </Text>
                      </TabPanel>
                      <TabPanel>
                        <Text _after={{content: '""', position: "absolute", bottom: 0, left: 5, width: "90%", height: "1px", background:"primary.300", filter: "blur(1px)"}}>
                          <Box as="span" bg="primary.100">
                          Beyond coding, here's a glimpse into who I am: I love 💪 working out, exploring 🍃 nature, enjoying time with 🐾 pets, and embracing the 🍔 foodie life. And whenever it's time to relax, catch me painting 🎨 canvases for that extra splash of creativity.
                          </Box>
                        </Text>
                      </TabPanel>
                      <TabPanel>
                        <Text h={{base: "50vh", lg: "fit-content"}} overflow="auto" _after={{content: '""', position: "absolute", bottom: 0, left: 5, width: "90%", height: "1px", background:"primary.300", filter: "blur(1px)"}}>
                          <Box as="span" bg="primary.100">
                            Hi there! 😊<br/><br/>
                            I'm Karolyne, a front-end developer with a passion for crafting 🖥️ digital experiences that seamlessly blend utility, beauty, and organization. Born in 🇧🇷 Brazil, raised in 🇪🇸 Spain, and now calling 🇫🇮 Finland home for the past 2~ years, I speak Portuguese, Spanish, and English – with Finnish soon to join the mix.<br/><br/>
                            My journey into front-end development is a bit unconventional. After exploring diverse fields like ⚖️ law, 📈 economics, and even a degree in 🕵️‍♀️ Criminology, I stumbled upon the captivating world of front-end development. What drew me in was the opportunity to create things that are not only functional but also beautifully organized – a reflection of my life's obsession. <br/><br/>
                            I embarked on my front-end development path through the Meta Front-end Specialization course. Along the way, I delved into HTML5, CSS, and JavaScript, developing my skills in version control and GitHub as well. I also explored Basic and Advanced React, acquainting myself with Chakra UI. To round out my skill set, I immersed myself in UX and UI design, working with Figma to craft wireframes and prototypes.<br/><br/>
                            Despite having a career focused primarily on customer service, I've found that the skills acquired in that field - 🤝 teamwork, 💬 communication, and understanding of 💡 customer needs - seamlessly translate into the world of development. <br/><br/>
                            Beyond coding, here's a glimpse into who I am: I love 💪 working out, exploring 🍃 nature, enjoying time with 🐾 pets, and embracing the 🍔 foodie life. And whenever it's time to relax, catch me painting 🎨 canvases for that extra splash of creativity.<br/><br/>
                            I am actively exploring opportunities to acquire new 🛠️ skills, advance my 🧠 knowledge, make meaningful ➕ contributions, and engage in collaborative 📂 projects.<br/><br/>
                            I invite you to explore my 📋 portfolio. I would be genuinely grateful to receive your 📝 feedback through the form below, as this will be a fantastic way to refine my coding skills.<br/><br/>
                            Whether you're here for 💬 collaboration opportunities or just to 🤝 connect, feel free to reach out – I'm ready for the next exciting chapter in my front-end development 🚀 journey!
                          </Box>
                        </Text>
                      </TabPanel>
                    </TabPanels>
                </Tabs>
              </Flex>
              <Flex as="figure" justifyContent="space-between" w="80%" marginTop={{base: 5, lg: 10}}>
                <Icon className="icon" color="primary.300" _hover={{color: "accent.400"}} boxSize={{base: 5, sm: 30, lg: 50}} as={FaHtml5}></Icon>
                <Icon className="icon" color="primary.300" _hover={{color: "accent.400"}} boxSize={{base: 5, sm: 30, lg: 50}} as={FaCss3Alt}></Icon>
                <Icon className="icon" color="primary.300" _hover={{color: "accent.400"}} boxSize={{base: 5, sm: 30, lg: 50}} as={IoLogoJavascript}></Icon>
                <Icon className="icon" color="primary.300" _hover={{color: "accent.400"}} boxSize={{base: 5, sm: 30, lg: 50}} as={FaGithub}></Icon>
                <Icon className="icon" color="primary.300" _hover={{color: "accent.400"}} boxSize={{base: 5, sm: 30, lg: 50}} as={FaReact}></Icon>
                <Icon className="icon" color="primary.300" _hover={{color: "accent.400"}} boxSize={{base: 5, sm: 30, lg: 50}} as={FaFigma}></Icon>
            </Flex>
          </Flex>
        </Flex>
  </>
  );
}

export default About;