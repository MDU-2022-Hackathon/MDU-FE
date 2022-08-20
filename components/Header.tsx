import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import type { NextComponentType } from "next";

const Header: NextComponentType = () => {
    return (
        <Center position={"fixed"} width="full" top={0} height={84} bg="white">
            <Flex width="full" mx={20} justifyContent={"space-between"}>
                <Box backgroundColor={"gray.100"}>로고</Box>
                <SearchIcon />
            </Flex>
        </Center>
    );
};

export default Header;
