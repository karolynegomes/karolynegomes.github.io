import { HStack} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import React from "react";

function Nav() {
  return (
    <HStack as="nav" spacing={10}>
        <NavLink to="/" style={{color: "red.500"}}>Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="resume">Resume</NavLink>
        <NavLink to="portfolio">Portfolio</NavLink>
    </HStack>
  );
}

export default Nav;