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
                    <Heading>참가자 인증</Heading>
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

                <VStack align="stretch">
                    <Text>비밀 번호 확인</Text>
                    <Input
                        placeholder="비밀 번호 확인"
                        type={"password"}
                        borderColor={
                            isError ? "red" : ""
                        }
                        onChange={(e) => {
                            if (e.target.value !== password) {
                                setIsError(true);
                            } else {
                                setIsError(false);
                            }
                        }}
                    />
                    {isError ? (
                        <Text color="red">비밀 번호가 일치하지 않습니다.</Text>
                    ) : null}
                </VStack>
                <VStack align="stretch">
                    <Text>참가 코드</Text>
                    <Input placeholder="참가 코드" />
                </VStack>

                <Button>회원 가입 및 로그인</Button>
            </VStack>
        </Box>
    );
};

export default SignIn;
