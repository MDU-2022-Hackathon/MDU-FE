import { Box, Center, Flex, Text } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import Image from "next/image";
import ProfileImage from "../assets/프로필.jpg";
import MiniProfile from "./MiniProfile";
import ProfileList from "./ProfileList";

const YesTeamBody: NextComponentType = () => {
    return (
        <Center display="flex" flexDirection="column" flexWrap="nowrap" >
            {/* 본인 썸네일 */}
            <Flex
                flexDirection="column"
                justifyContent="space-around"
                alignItems="center"
                minW="230px"
                maxW="230px"
                minH="230px"
                maxH="230px"
                border="1px"
                borderColor="gray.200"
                mt="100px"
                mb="50px"
                borderRadius="7px"
                boxShadow="md"
            >

                <Box
                    w="141px"
                    h="141px"
                    borderRadius="70%"
                    overflow="hidden"
                    position="relative"
                >
                    <Image
                        src={ProfileImage}
                        width="100%"
                        height="100%"
                        layout="fill"
                    />
                </Box>
                <Box
                    w="150px"
                    h="30px"
                    borderBottom="solid"
                    borderColor="black"
                    textAlign="center"
                    fontWeight="semibold"
                    fontSize="16px"
                    mb="5px"
                >
                    이름
                </Box>
                <Box fontSize="13px" color="rgb(112, 112, 112)" mb="10px">
                    자기소개
                </Box>
            </Flex>

            {/* 팀원들 썸네일 */}
            <ProfileList />

            {/* 팀원 이메일 정보 */}
            <Box w="180px" h="120px" mt="35px" mb="200px" ml="50px" alignSelf="flex-start">
                <Text my="10px" fontSize="1xl" textColor="brand">📧팀원 이메일 모아보기</Text>
                koo04065@khu.ac.kr
                koo04065@khu.ac.kr
                koo04065@khu.ac.kr
                koo04065@khu.ac.kr
                koo04065@khu.ac.kr
            </Box>

        </Center>
    );
};

export default YesTeamBody;