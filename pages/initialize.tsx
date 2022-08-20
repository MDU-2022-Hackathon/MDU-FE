import {
    Button,
    Center,
    Flex,
    Heading,
    Input,
    Text,
    VStack,
    Image,
    Box
} from "@chakra-ui/react";
import type { NextPage } from "next";

const PortFolioButton = ({ portfolioText }: any) => {
    return (
        <Center width="full" height={100} borderWidth={1} borderRadius="lg">
            <Text>{portfolioText}</Text>
        </Center>
    );
};

const Init: NextPage = () => {
    return (
        <Center height={"100vh"}>
            <VStack width="full" margin={20} gap={4}>
                <Heading>환영합니다 최지원님!</Heading>
                <Heading>포트폴리오 연동하기</Heading>
                <Flex width="full" gap={4} justifyContent={"space-between"}>
                    <PortFolioButton portfolioText="Github" />
                    <PortFolioButton portfolioText="Behance / Monofolio" />
                    <PortFolioButton portfolioText="열정 열정 열정" />
                </Flex>
                <Input placeholder="Github Id" />
                <Input placeholder="Behance Id" />
                
                <Button>자세한 프로필 입력하기</Button>
            </VStack>
        </Center>
    );
};

export default Init;
