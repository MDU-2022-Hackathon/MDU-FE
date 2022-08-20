import { Box, Button, Center, Heading, Input, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";

const SignIn: NextPage = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [authCode, setAuthCode] = useState("");

    return (
        <Box height={"100vh"} width="full">
            <VStack margin={20} gap={4} align="stretch">
                <Center marginBottom={12}>
                    <Heading>참가자 로그인</Heading>
                </Center>
                <VStack align="stretch">
                    <Text>이름</Text>
                    <Input
                        placeholder="이름"
                        onChange={(e) => setId(e.target.value)}
                    />
                </VStack>

                <VStack align="stretch">
                    <Text>비밀 번호</Text>
                    <Input
                        placeholder="비밀 번호"
                        type={"password"}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </VStack>

                <Button>로그인</Button>
            </VStack>
        </Box>
    );
};

export default SignIn;
