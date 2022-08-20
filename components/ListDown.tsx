import { Flex, Box, Tab, Tabs, TabList, TabPanels, TabPanel, border } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import MiniProfile from "./MiniProfile";
import { useState } from "react";

const ListDown: NextComponentType = () => {

    return (
        <Tabs variant="unstyled">
                <TabList mt="150px" ml="260px" w="137px" h="23px" bg="gray.100" borderRadius="5px"
                         alignItems="center" justifyContent="center">
                    <Tab fontSize="10px" fontWeight="light" w="65px" h="15px"
                         _selected={{ color: "#8743FF", bg: 'white', borderRadius:"5px", fontWeight:"bold"}}>추천순</Tab>
                    <Tab fontSize="10px" fontWeight="light" w="65px" h="15px"
                         _selected={{ color:"#8743FF", bg: 'white', borderRadius:"5px", fontWeight:"bold"}}>이름순</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel mt="7px" pl="13px" display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-around">
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                        <MiniProfile />
                    </TabPanel>
                    <TabPanel>
                    </TabPanel>
                </TabPanels>
            </Tabs>
    );
};

export default ListDown;
