import React from "react";
import Nav from "./Nav";
import { Heading, Flex, IconButton, Drawer, useDisclosure, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from "@chakra-ui/react";
import NavMobile from "./NavMobile";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";


function Header() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const handleLinkClick = () => {
    onClose();
  }

  return (
    <Flex as="header" flexDir="column" justifyContent="center" alignItems="center" position="sticky" top="0" bgColor="secondary.50" h="10vh" width="100%" zIndex={999}>
      <Flex w="100%" maxWidth={1500} justifyContent="space-between" alignItems="center" paddingX={{base: "5vw", "2xl": "1vw"}} position="absolute" top="0">
      <Flex height="10vh" alignItems="center">
      <RouterLink className="navlink" to="/"><Heading size={{base: "lg", lg: "xl"}} color="text.950">karolyne<Heading size={{base: "lg", lg: "xl"}} bgGradient="linear(to-l, #eb984a, #ed4946)" bgClip="text" as="span">.dev</Heading></Heading></RouterLink>
      </Flex>
      <Nav/>
      <Flex h="10vh" alignItems="center" display={{base: "flex", lg: "none", xl: "none", "2xl":"none"}}>
        <IconButton display={{base: "flex", lg: "none"}} color="text.950" bg="transparent" onClick={onOpen} icon={<HamburgerIcon w={8} h={8}/>} zIndex={999}/>
      </Flex>
      </Flex>
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay/>
          <DrawerContent bgColor="secondary.50">
            <DrawerCloseButton h="10vh"paddingX={{base: "5vw", "2xl": "1vw"}} size="xl"/>
            <DrawerBody paddingY={120}>
              <NavMobile onLinkClick={handleLinkClick}/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
    </Flex>
    );
}

export default Header;