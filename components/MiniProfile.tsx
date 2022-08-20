import { Box, Flex } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import Image from "next/image";
import ProfileImage from "../assets/프로필.jpg";

const MiniProfile: NextComponentType = () => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            minW="170px"
            maxW="170px"
            minH="170px"
            maxH="170px"
            border="1px"
            borderColor="gray.200"
            m={1}
            borderRadius="7px"
            boxShadow="md"
        >
            <Box
                w="91px"
                h="91px"
                borderRadius="70%"
                overflow="hidden"
                position="relative"
            >
                <Image
                    src={ProfileImage}
                    width="100px"
                    height="100px"
                    layout="fill"
                />
            </Box>
            <Box
                w="140px"
                h="26px"
                borderBottom="solid"
                borderColor="black"
                textAlign="center"
                fontWeight="semibold"
                fontSize="13px"
                mb="7.6px"
            >
                이름
            </Box>
            <Box fontSize="10px" color="rgb(112, 112, 112)">
                자기소개
            </Box>
        </Flex>
    );
};

export default MiniProfile;
