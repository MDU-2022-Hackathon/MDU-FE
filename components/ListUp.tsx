import { Box, Flex, Stack, HStack } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import MiniProfile from "./MiniProfile";

const ListUp: NextComponentType = () => {

    return (
        <Box bg="gray.200" p={1} mt={4}>
            <Box mb={2}>추천 리스트</Box>
            <HStack overflowX="scroll" >
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

export default ListUp;

