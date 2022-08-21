import { TabPanel, TabPanels, Container, Tab, TabList, Tabs, VStack, Box, Flex, Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import BottomNav from "../components/BottomNav";
import ProfileHeader from "../components/Header/ProfileHeader";
import Image from "next/image";
import ProfileImage from "../assets/프로필.jpg";
import UserProfileText from "../components/UserProfileText";
import UserProfileSkill from "../components/UserProfileSkill"

const Home: NextPage = () => {
    return (
        <Container px="0px" maxW="full" maxH="full" m={0}>
            {/* 고정 상단바 */}
            <ProfileHeader />

            {/* 고정 하단바 */}
            <BottomNav active="profile" />

            {/* 내용 */}
            <Flex position="fixed" top="85px" left="0px" right="0px" bg="white" h="300px" zIndex="1"
                  flexDirection="column" justifyContent="center" alignItems="center">
                <Box
                w="130px"
                h="130px"
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
                <Center
                    w="140px"
                    fontWeight="semibold"
                    fontSize="20px"
                    mt="10px"
                    mb="0px"
                >
                    이은상
                </Center>
                <Center
                    w="140px"
                    fontWeight="light"
                    fontSize="13px"
                    mt="0px"
                >
                    개발자
                </Center>
                <Center
                    w="140px"
                    h="40px"
                    textAlign="center"
                    fontWeight="semibold"
                    fontSize="12px"

                >
                    eslee850@gmail.com
                </Center>
                    

            </Flex>
            <Tabs w={"full"} isFitted colorScheme={"brand"}>
                <TabList position="fixed" bg="white" justifyContent="center"
                    top={"384px"} left={0} right={0} px="20px"
                    color="rgb(112, 112, 112)" zIndex="1">
                    <Tab fontSize="15px" borderBlockEndWidth="4px" maxW="30%" mr="7px">소개</Tab>
                    <Tab fontSize="15px" borderBlockEndWidth="4px" maxW="30%" ml="7px">직업</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel  mt={"435px"}>
                        <UserProfileText />
                    </TabPanel>

                    <TabPanel mt={"435px"}>
                        <UserProfileSkill />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
};

export default Home;