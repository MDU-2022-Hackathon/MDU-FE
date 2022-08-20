import { Flex, Box, Button, ButtonGroup } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import MiniProfile from "./MiniProfile";

const ListDown: NextComponentType = () => {
    return (
        <Flex
            p={0}
            my={5}
            justifyContent="space-between"
            w="full"
            flexDirection="row"
            flexWrap="wrap"
        >
            <Box w="100%">
                <ButtonGroup bg="gray.200" p="5px">
                    <Button>추천순</Button>
                    <Button>이름순</Button>
                </ButtonGroup>
            </Box>
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
        </Flex>
    );
};

export default ListDown;
