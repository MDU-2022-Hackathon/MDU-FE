import { Box, HStack } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import MiniProfile from "./MiniProfile";

const ListLeft: NextComponentType = () => {

    return (
        <Box p={0} my={5} width="full">
            <Box mx={1} my={2}>추천 리스트</Box>
            <HStack overflowX="scroll">
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


