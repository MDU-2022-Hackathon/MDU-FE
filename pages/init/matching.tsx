import { Center, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Router from "next/router";
import { useEffect } from "react";
import Logo from "../../assets/logo.png";

const SignIn: NextPage = () => {
    useEffect(() => {
        setTimeout(() => {
            Router.push("/main");
        }, 3000);
    });

    return (
        <Center height={"95vh"} width="full">
            <VStack width={"full"} margin={10} gap={12}>
                <motion.div
                    className="block"
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <Image src={Logo} alt="logo" width={200} height={200} />
                </motion.div>

                <VStack
                    gap={0}
                    color="brand.100"
                    fontWeight={600}
                    fontSize={24}
                >
                    <Text>통하는 팀원을 찾고 있어요!</Text>
                    <Text>잠시만 기다려 주세요 :)</Text>
                </VStack>
            </VStack>
        </Center>
    );
};

export default SignIn;
