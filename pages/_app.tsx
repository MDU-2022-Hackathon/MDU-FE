import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            100: "#8643FE",
            200: "#8643FE",
            300: "#8643FE",
            400: "#8643FE",
            500: "#8643FE",
            600: "#8643FE",
            700: "#8643FE",
            800: "#8643FE",
            900: "#8643FE",
        },
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
