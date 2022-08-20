import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import type { NextComponentType } from "next";

const Header: NextComponentType = () => {
    return (
        <Center position={"fixed"} top={0} left={0} right={0} height={84} bg="white" px={5}>
            <Flex width="full" mx={0} justifyContent={"space-between"}>
                <Box backgroundColor={"gray.100"} px={5}>로고</Box>
                <SearchIcon />
            </Flex>
        </Center>
    );
};

export default Header;
