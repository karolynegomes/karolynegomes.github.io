import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./1 Header/Header";
import Main from "./2 Main/Main";
import Footer from "./3 Footer/Footer";

function Layout() {
  return (
    <Flex flexDirection="column">
        <Header/>
        <Main/>
        <Footer/>
    </Flex>
  );
}

export default Layout;