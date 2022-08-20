import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    HStack,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Logo from "../assets/logo.png";
import Router from "next/router";


const SignIn: NextPage = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [authCode, setAuthCode] = useState("");

    return (
        <Center height={"95vh"} width="full">
            <VStack width={728} margin={20} gap={2}>
                <Center marginBottom={12}>
                    <Image src={Logo} alt="logo" width={100} height={100} />
                </Center>
                <Input
                    height={54}
                    bg="#F7F7F7"
                    borderWidth={0}
                    placeholder="아이디"
                    onChange={(e) => setId(e.target.value)}
                />

                <Input
                    height={54}
                    bg="#F7F7F7"
                    borderWidth={0}
                    placeholder="비밀 번호"
                    type={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Flex gap={4}>
                    <Button
                        width={144}
                        height={42}
                        borderRadius={24}
                        marginTop={4}
                        colorScheme="brand"
                        onClick={() => {Router.push("/register")}}
                    >
                        회원 가입
                    </Button>
                    <Button
                        width={144}
                        height={42}
                        borderRadius={24}
                        marginTop={4}
                        colorScheme="brand"
                        variant={"outline"}
                    >
                        로그인
                    </Button>
                </Flex>
            </VStack>
        </Center>
    );
};

export default SignIn;
