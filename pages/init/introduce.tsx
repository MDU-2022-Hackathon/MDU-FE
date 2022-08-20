import {
    Box,
    Button,
    Center,
    Flex,
    Text,
    Textarea,
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
                    <Text>자기소개를 입력해 주세요.</Text>
                </VStack>

                <Box width={"full"}>
                    <Textarea
                        backgroundColor={"#f7f7f7"}
                        borderWidth={0}
                        minHeight={200}
                        resize={"none"}
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
                            Router.push("/init/matching");
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
