import { Container, Button, VStack, Center, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Router from "next/router";

const NoTeamBody: NextPage = () => {
    return (
        <Center height={"95vh"} width="full">
            <VStack width={"full"} margin={10} gap={12}>
                <VStack
                    gap={0}
                    color="brand.100"
                    fontWeight={600}
                    fontSize={20}
                >
                    <Text>현재 함께하는 팀원이 없어요💦</Text>
                    <Text>나에게 맞는 팀원을 찾아보세요 :)</Text>
                </VStack>
                <Button
                    colorScheme="brand"
                    color="white"
                    borderRadius="40px"
                    minW="150px"
                    onClick={() => {
                        Router.push("/main");
                    }}
                >
                    팀원 찾기
                </Button>
            </VStack>
        </Center>
    );
};

export default NoTeamBody;