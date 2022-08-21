import {
    Flex,
    Tab,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";
import type { NextComponentType } from "next";
import MiniProfile from "./MiniProfile";

const ProfileList: NextComponentType = () => {
    return (
        <Flex
            mt="7px"
            pl="13px"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-around"
            >
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
        </Flex>

    );
};

export default ProfileList;