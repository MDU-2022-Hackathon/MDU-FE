import { Box, Button, Center, Container, Heading, Input, Tab, TabList, Tabs, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <BottomNav />
            <Box position="fixed" width={"full"}>
                <Tabs width="full" isFitted>
                    <TabList>
                        <Tab>추천</Tab>
                        <Tab>개발자</Tab>
                        <Tab>디자이너</Tab>
                        <Tab>기획자</Tab>
                    </TabList>
                </Tabs>
            </Box>
            <Box width="full" marginTop={84} height={3000}></Box>
        </>
    );
};

export default Home;
