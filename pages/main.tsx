import {
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import ListDown from "../components/ListDown";
import ListLeft from "../components/ListLeft";

const Home: NextPage = () => {
    return (
        <Container px="21px" maxW="full" maxH="full" m={0}>
            {/* 고정 상단바 */}
            <Header />

            {/* 고정 하단바 */}
            <BottomNav active="home" />

            {/* 내용 */}
            <Tabs w={"full"} isFitted colorScheme={"brand"}>
                <TabList
                    position="fixed"
                    bg="white"
                    top={"84px"}
                    left={0}
                    right={0}
                    px="20px"
                    color="rgb(112, 112, 112)"
                    zIndex="1"
                >
                    <Tab fontSize="15px">추천</Tab>
                    <Tab fontSize="15px">개발자</Tab>
                    <Tab fontSize="15px">디자이너</Tab>
                    <Tab fontSize="15px">기획자</Tab>
                </TabList>

                <TabPanels mt={"160px"}>
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
