import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {

    text: {
    50: "#fdf9e8",
    100: "#fbf2d0",
    200: "#f6e5a2",
    300: "#f2d973",
    400: "#eecc44",
    500: "#e9bf16",
    600: "#bb9911",
    700: "#8c730d",
    800: "#5d4c09",
    900: "#2f2604",
    950: "#171302",
    },

    background: {
    50: "#f8f5ed",
    100: "#f1ecda",
    200: "#e3d8b5",
    300: "#d5c590",
    400: "#c7b16b",
    500: "#b99e46",
    600: "#947e38",
    700: "#6f5f2a",
    800: "#4a3f1c",
    900: "#25200e",
    950: "#121007"
    },

    primary: {
    50: "#fcf2e8",
    100: "#fae5d1",
    200: "#f5cba3",
    300: "#f0b075",
    400: "#eb9647",
    500: "#e67c19",
    600: "#b86314",
    700: "#8a4a0f",
    800: "#5c320a",
    900: "#2e1905",
    950: "#170c03"
    },

    secondary: {
    50: "#fcf7e8",
    100: "#f9f0d2",
    200: "#f3e1a5",
    300: "#edd278",
    400: "#e8c34a",
    500: "#e2b41d",
    600: "#b59017",
    700: "#876c12",
    800: "#5a480c",
    900: "#2d2406",
    950: "#171203"
    },

    accent: {
    50: "#faeaea",
    100: "#f6d6d5",
    200: "#ecadac",
    300: "#e38482",
    400: "#d95b59",
    500: "#d0322f",
    600: "#a62826",
    700: "#7d1e1c",
    800: "#531413",
    900: "#2a0a09",
    950: "#150505"
    }
}})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>
);
