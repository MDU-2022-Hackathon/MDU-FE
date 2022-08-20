import { TabPanel, TabPanels, Container, Tab, TabList, Tabs, VStack, Center, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import ListLeft from "../components/ListLeft";
import ListDown from "../components/ListDown";
import OurTeamHeader from "../components/OurTeamHeader";

const Home: NextPage = () => {
    return (
        <Container px="0px" maxW="full" maxH="full" m={0}>
            {/* 고정 상단바 */}
            <OurTeamHeader />

            {/* 고정 하단바 */}
            <BottomNav active="team" />

            <Center height={"95vh"} width="full">
                <VStack width={"full"} margin={10} gap={12}>
                    <VStack
                        gap={0}
                        color="brand.100"
                        fontWeight={600}
                        fontSize={24}
                    >
                        <Text>현재 함께하는 팀원이 없어요💦</Text>
                        <Text>나에게 맞는 팀원을 찾아보세요 :)</Text>
                    </VStack>
                </VStack>
            </Center>
        </Container>
    );
};

export default Home;