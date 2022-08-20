import { Box, TabPanel, TabPanels, Button, Center, Container, Heading, Input, Stack, Text, Tab, TabList, Tabs, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import ListUp from "../components/ListUp";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <BottomNav />
            <Box>
                <Tabs isFitted>
                    <TabList width={"full"} position="fixed" bg="white" top="84px">
                        <Tab>추천</Tab>
                        <Tab>개발자</Tab>
                        <Tab>디자이너</Tab>
                        <Tab>기획자</Tab>
                    </TabList>

                    <TabPanels mt="120px">
                        <TabPanel>
                            <ListUp />
                            <ListUp />
                            <ListUp />
                            <ListUp />
                            <ListUp />
                        </TabPanel>
                        <TabPanel>
                            개발자 페이지
                        </TabPanel>
                        <TabPanel>
                            디자이너 페이지
                        </TabPanel>
                        <TabPanel>
                            기획자 페이지
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            <Box width="full" marginTop={200} height={3000}>
                
            </Box>
        </>
    );
};

export default Home;
