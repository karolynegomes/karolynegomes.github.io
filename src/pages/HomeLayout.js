import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../components/Header and Nav/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen((prev) => !prev);
  };


  return (
    <Flex id="/" flexDirection="column">
        <Header isHamburgerMenuOpen={isHamburgerMenuOpen} toggleHamburgerMenu={toggleHamburgerMenu}/>
        <Outlet isHamburgerMenuOpen={isHamburgerMenuOpen}/>
        <Footer/>
    </Flex>
  );
}

export default HomeLayout;