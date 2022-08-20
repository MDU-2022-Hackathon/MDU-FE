import { TabPanel, TabPanels, Container, Tab, TabList, Tabs, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import ListLeft from "../components/ListLeft";
import ListDown from "../components/ListDown";
import ScrapHeader from "../components/ScrapHeader";

const Home: NextPage = () => {
    return (
        <Container px="0px" maxW="full" maxH="full" m={0}>
            {/* 고정 상단바 */}
            <ScrapHeader />

            {/* 고정 하단바 */}
            <BottomNav active="team"/>

            {/* 내용 */}
            <Tabs w={"full"} isFitted colorScheme={"brand"}>
                <TabList position="fixed" bg="white" 
                    top={"84px"} left={0} right={0} px="20px"
                    color="rgb(112, 112, 112)" zIndex="1">
                    <Tab fontSize="15px" >개발자</Tab>
                    <Tab fontSize="15px" >디자이너</Tab>
                    <Tab fontSize="15px" >기획자</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel mt={"125px"} p={0}>
                        <ListDown />
                    </TabPanel>
                    <TabPanel mt={"125px"} p={0}>
                        <ListDown />
                    </TabPanel>
                    <TabPanel mt={"125px"} p={0}>
                        <ListDown />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
};

export default Home;