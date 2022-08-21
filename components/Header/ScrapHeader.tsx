import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image"
import type { NextComponentType } from "next";
import EditImage from "../../assets/edit.svg";

const ScrapHeader: NextComponentType = () => {

    return (
        <Center position={"fixed"} top={0} left={0} right={0} height={84} bg="white" px="20px" zIndex="1">
            <Center position={"fixed"} top={"38px"}
                fontSize="20px" fontWeight="bold" w="80px" h="24px">
                스크랩
            </Center>
            <Box position="fixed" top="36px" right="40px">
                <Image src={EditImage} width="20px" height="21px" />
            </Box>
        </Center>
    );
};

export default ScrapHeader;
