import {
    Box,
    Button,
    Center,
    Flex,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import Router from "next/router";
import Logo from "../../assets/logo.png";

const SignIn: NextPage = () => {
    return (
        <Center height={"95vh"} width="full">
            <VStack width={"full"} margin={10} gap={12}>
                <Image src={Logo} alt="logo" width={100} height={100} />
                <VStack gap={0}>
                    <Text>원활한 매칭을 위해 정보가 필요해요.</Text>
                    <Text>최지원님의 MBTI는 무엇인가요?</Text>
                </VStack>

                <Box width={"full"}>
                    <Text marginTop={12} color={"gray.500"}>
                        MBTI
                    </Text>
                    <Input
                        borderTop={0}
                        borderRight={0}
                        borderLeft={0}
                        borderRadius={0}
                    />
                </Box>

                <Flex gap={4}>
                    <Button
                        width={144}
                        height={42}
                        borderRadius={24}
                        marginTop={4}
                        colorScheme="brand"
                        onClick={() => {
                            Router.push("/init/school");
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
