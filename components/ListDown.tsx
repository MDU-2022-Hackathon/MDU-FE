import { Box, Flex, Stack } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import MiniProfile from "./MiniProfile";

const ListDown: NextComponentType = () => {

    return (
        <Flex bg="gray.200" justifyContent="center" p={1} mt={4} width="full" flexDirection="row" flexWrap="wrap">
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
        </Flex>
    );
};

export default ListDown;
