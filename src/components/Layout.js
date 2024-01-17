import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./1 Header/Header";
import Main from "./2 Main/Main";
import Footer from "./3 Footer/Footer";

function Layout() {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen((prev) => !prev);
  };


  return (
    <Flex flexDirection="column">
        <Header isHamburgerMenuOpen={isHamburgerMenuOpen}
        toggleHamburgerMenu={toggleHamburgerMenu}/>
        <Main isHamburgerMenuOpen={isHamburgerMenuOpen}/>
        <Footer/>
    </Flex>
  );
}

export default Layout;