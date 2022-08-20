import { TabPanel, TabPanels, Container, Tab, TabList, Tabs, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import ListLeft from "../components/ListLeft";
import ListDown from "../components/ListDown";

const Home: NextPage = () => {
    return (
        <Container px="20px" maxW="full" maxH="full" m={0}>
            {/* 고정 상단바 */}
            <Header />

            {/* 고정 하단바 */}
            <BottomNav />

            {/* 내용 */}
            <Tabs w={"full"} isFitted>
                <TabList position="fixed" bg="white" 
                    top={84} left={0} right={0} px={5}>

                    <Tab fontSize="small">추천</Tab>
                    <Tab fontSize="small">개발자</Tab>
                    <Tab fontSize="small">디자이너</Tab>
                    <Tab fontSize="small">기획자</Tab>

                </TabList>

                <TabPanels mt={150}>
                    <TabPanel p={0}>
                        <ListLeft />
                        <ListLeft />
                        <ListLeft />
                        <ListLeft />
                        <ListLeft />
                    </TabPanel>
                    <TabPanel p={0}>
                        <ListDown />
                    </TabPanel>
                    <TabPanel p={0}>
                        <ListDown />
                    </TabPanel>
                    <TabPanel p={0}>
                        <ListDown />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
};

export default Home;