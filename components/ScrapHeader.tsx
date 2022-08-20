import { SearchIcon } from "@chakra-ui/icons";
import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image"
import type { NextComponentType } from "next";
import EditImage from "../assets/edit.svg";

const ScrapHeader: NextComponentType = () => {

    return (
        <Center position={"fixed"} top={0} left={0} right={0} height={84} bg="white" px="20px" zIndex="1">
            <Center>
                <Text>
                    Scrap
                </Text>
            </Center>
            <Box position="fixed" top="35px" right="40px">
                <Image src={EditImage} />
            </Box>
        </Center>
    );
};

export default ScrapHeader;
