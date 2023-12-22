import React from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio/Portfolio";
import { Flex } from "@chakra-ui/react";
import { Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <Flex as="main" flexDirection="column">
      <Routes>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="portfolio" element={<Portfolio/>} />
      </Routes>
    </Flex>
  );
}

export default Main;