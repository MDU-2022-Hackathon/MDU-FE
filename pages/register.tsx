import { ArrowBackIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Center,
    Checkbox,
    Flex,
    Heading,
    Input,
    Text,
    VStack
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import Router from "next/router";

const SignIn: NextPage = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);

    return (
        <Box height={"100vh"} width="full">
            <VStack margin={10} gap={12} align="stretch">
                <Box>
                    <ArrowBackIcon w={10} h={10} />
                </Box>
                <Heading>회원 가입</Heading>
                <Box>
                    <Text color={"gray.500"}>이메일</Text>
                    <Input
                        borderTop={0}
                        borderRight={0}
                        borderLeft={0}
                        borderRadius={0}
                    />
                </Box>
                <Box>
                    <Text color={"gray.500"}>아이디</Text>
                    <Input
                        borderTop={0}
                        borderRight={0}
                        borderLeft={0}
                        borderRadius={0}
                        onChange={(e) => setId(e.target.value)}
                    />
                </Box>
                <Box>
                    <Text color={"gray.500"}>비밀 번호</Text>
                    <Input
                        borderTop={0}
                        borderRight={0}
                        borderLeft={0}
                        borderRadius={0}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>
                <Box>
                    <Text color={"gray.500"}>비밀 번호 확인</Text>
                    <Input
                        borderTop={0}
                        borderRight={0}
                        borderLeft={0}
                        borderRadius={0}
                        type="password"
                        borderColor={isError ? "red" : undefined}
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
                </Box>
                <Flex justifyContent="space-between">
                    <Text>개인정보취급방침 및 동의</Text>
                    <Checkbox colorScheme={"brand"} size="lg" />
                </Flex>
                <Center>
                    <Button
                        width={144}
                        height={42}
                        borderRadius={24}
                        marginTop={4}
                        colorScheme="brand"
                        onClick={() => {
                            Router.push("/initialize");
                        }}
                    >
                        가입 하기
                    </Button>
                </Center>
            </VStack>
        </Box>
    );
};

export default SignIn;
