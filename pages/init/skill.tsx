import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Center,
    Flex,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import type { NextComponentType, NextPage } from "next";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import Logo from "../../assets/logo.png";

type StackList = string[];

interface StackName {
    stackName: string;
    stackList: StackList;
    setStackList: Function;
}

const StackButton: any = ({
    stackName,
    stackList,
    setStackList,
}: StackName) => {
    return (
        <Button
            gap={4}
            variant="outline"
            colorScheme={"black"}
            borderRadius={32}
            onClick={() => {
                setStackList(
                    stackList.filter((item: string) => item !== stackName)
                );
            }}
        >
            <Text>{stackName}</Text> <CloseIcon inlineSize={3} />
        </Button>
    );
};

const SignIn: NextPage = () => {
    const [stackList, setStackList] = useState<StackList>([]);
    const [inputStack, setInputStack] = useState<string>("");

    return (
        <Center height={"95vh"} width="full">
            <VStack width={"full"} margin={10} gap={12}>
                <Image src={Logo} alt="logo" width={100} height={100} />
                <VStack gap={0}>
                    <Text>사용하는 기술 스택 및 작업 툴을 입력해주세요.</Text>
                </VStack>

                <Box width={"full"}>
                    <Text marginTop={12} color={"gray.500"}>
                        기술 스택 및 작업 툴
                    </Text>
                    <Flex gap={4}>
                        <Input
                            borderTop={0}
                            borderRight={0}
                            borderLeft={0}
                            borderRadius={0}
                            onChange={(e) => {
                                setInputStack(e.target.value);
                            }}
                        />
                        <Button
                            onClick={() => {
                                setStackList([...stackList, inputStack]);
                            }}
                            variant="outline"
                            color="gray.400"
                            gap={2}
                        >
                            <Text>추가 하기</Text> <AddIcon inlineSize={3} />
                        </Button>
                    </Flex>
                </Box>
                <Flex gap={4}>
                    {stackList.map((stack, index) => {
                        return (
                            <StackButton
                                stackName={stack}
                                stackList={stackList}
                                setStackList={setStackList}
                                key={index}
                            />
                        );
                    })}
                </Flex>

                <Flex gap={4}>
                    <Button
                        width={144}
                        height={42}
                        borderRadius={24}
                        marginTop={4}
                        colorScheme="brand"
                        onClick={() => {
                            Router.push("init/skill");
                        }}
                    >
                        입력 하기
                    </Button>
                </Flex>
            </VStack>
        </Center>
    );
};

export default SignIn;
