import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Router from "next/router";
import { useState } from "react";

type PFType = "github" | "notefolio" | undefined;
const Init: NextPage = () => {
    const [portFolioType, setPortFolioType] = useState<PFType>(undefined);

    return (
        <Box height={"100vh"} width="full">
            <VStack margin={10} gap={4} align="stretch">
                <Box marginBottom={30}>
                    <ArrowBackIcon w={10} h={10} />
                </Box>
                <Text fontSize={20} textAlign={"center"}>
                    환영합니다. 최지원님!
                </Text>
                <Text fontSize={20} textAlign={"center"}>
                    포트폴리오 연동으로 작업물을 공유해볼까요?
                </Text>

                <Center gap={4}>
                    <Button
                        width={"50%"}
                        height={42}
                        borderRadius={24}
                        marginTop={4}
                        colorScheme="black"
                        borderWidth={1}
                        color={portFolioType === "github" ? "white" : "black"}
                        borderColor={
                            portFolioType === "github" ? "white" : "black"
                        }
                        backgroundColor={
                            portFolioType === "github" ? "black" : "white"
                        }
                        onClick={() => {
                            setPortFolioType("github");
                            console.log(portFolioType);
                        }}
                    >
                        Github
                    </Button>
                    <Button
                        width={"50%"}
                        height={42}
                        borderRadius={24}
                        marginTop={4}
                        borderWidth={1}
                        color={
                            portFolioType === "notefolio" ? "white" : "#1ECAD3"
                        }
                        borderColor={
                            portFolioType === "notefolio" ? "white" : "#1ECAD3"
                        }
                        backgroundColor={
                            portFolioType === "notefolio" ? "#1ECAD3" : "white"
                        }
                        onClick={() => {
                            setPortFolioType("notefolio");
                            console.log(portFolioType);
                        }}
                        // _hover={false}
                    >
                        Notefolio
                    </Button>
                </Center>
                <Input
                    height={54}
                    bg="#F7F7F7"
                    borderWidth={0}
                    placeholder={`${portFolioType} 아이디를 입력해주세요.`}
                />
                <Center>
                    <Button
                        width={"100%"}
                        height={42}
                        borderRadius={24}
                        marginTop={4}
                        colorScheme="brand"
                        onClick={() => {
                            Router.push("/init/mbti");
                        }}
                    >
                        포트폴리오 등록하기
                    </Button>
                </Center>
                <Text fontSize={16} color="gray.500" textAlign={"center"}>
                    <u>다음에 하기</u>
                </Text>
            </VStack>
        </Box>
    );
};

export default Init;
