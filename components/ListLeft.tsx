import { Box, HStack } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import MiniProfile from "./MiniProfile";

const ListLeft: NextComponentType = () => {
    return (
        <Box py={0} mb={"40px"} width="full">
            <Box mx={"0px"} mb={"1px"}>
                Text
            </Box>
            <HStack h="200px" alignItems="center" overflowX="scroll">
                <MiniProfile />
                <MiniProfile />
                <MiniProfile />
                <MiniProfile />
                <MiniProfile />
                <MiniProfile />
                <MiniProfile />
                <MiniProfile />
                <MiniProfile />
            </HStack>
        </Box>
    );
};

export default ListLeft;
