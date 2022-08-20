import type { NextPage } from "next";
import { Center } from "@chakra-ui/react";
import Image from "next/image";
import SplashImage from "../assets/splash.png";
import BackgroundImage from "../assets/splash_bg.svg";
import { useEffect } from "react";
import Router from "next/router";

const Home: NextPage = () => {
    useEffect(() => {
        setTimeout(() => {
            Router.push("/login");
        }, 1000);
    });

    return (
        <Center height={"100vh"} width={"100vw"}>
            <Image
                src={BackgroundImage}
                alt="background"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
            />
            <Image
                src={SplashImage}
                width={206}
                height={285.6666666667}
                alt="logo"
            />
        </Center>
    );
};

export default Home;
