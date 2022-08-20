import { TabPanel, TabPanels, Container, Tab, TabList, Tabs, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import BottomNav from "../components/BottomNav";
import ListDown from "../components/ListDown";
import ScrapHeader from "../components/ScrapHeader";
import ProfileList from "../components/ProfileList";

const Home: NextPage = () => {
    return (
        <Container px="0px" maxW="full" maxH="full" m={0}>
            {/* 고정 상단바 */}
            <ScrapHeader />

            {/* 고정 하단바 */}
            <BottomNav active="scrap"/>

            {/* 내용 */}
            <Tabs w={"full"} isFitted colorScheme={"brand"}>
                <TabList position="fixed" bg="white" 
                    top={"84px"} left={"0px"} right={"0px"} px="20px"
                    color="rgb(112, 112, 112)" zIndex="1" justifyContent="center">
                    <Tab fontSize="15px" maxW="28%">개발자</Tab>
                    <Tab fontSize="15px" maxW="28%">디자이너</Tab>
                    <Tab fontSize="15px" maxW="28%">기획자</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel mt={"150px"} p={0}>
                        <ProfileList />
                    </TabPanel>
                    <TabPanel mt={"150px"} p={0}>
                        <ProfileList />
                    </TabPanel>
                    <TabPanel mt={"150px"} p={0}>
                        <ProfileList />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
};

export default Home;