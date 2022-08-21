import {
    Flex,
    Box,
    Tab,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    border,
} from "@chakra-ui/react";
import type { NextComponentType } from "next";
import ProfileList from "./ProfileList";

const ListDown: any = (props : any) => {

    /* 
        users : userList = [
            {
                normal: {
                    type: 'pm',
                    stack: [Array],
                    image: 'url',
                    'self-introduction': '안녕하세요. 제 이름은 강병찬. ~ ',
                    awards: [Array]
                },

                identification: {
                    name: '강병찬',
                    number: '01034531171',
                    email: 'byungchan3476@gmail.com',
                    mbti: 'intj',
                    school: '연세대학교',
                    image: 'imagelink',
                    githubId: 'bkbkal'
                }
            },
            {},{}...
        ]
    */
    const users = props.users;

    return (
        <Tabs variant="unstyled">
            <TabList
                mt="150px"
                ml="260px"
                w="137px"
                h="23px"
                bg="gray.100"
                borderRadius="5px"
                alignItems="center"
                justifyContent="center"
            >
                <Tab
                    fontSize="10px"
                    fontWeight="light"
                    w="65px"
                    h="15px"
                    _selected={{
                        color: "#8743FF",
                        bg: "white",
                        borderRadius: "5px",
                        fontWeight: "bold",
                    }}
                >
                    추천순
                </Tab>
                <Tab
                    fontSize="10px"
                    fontWeight="light"
                    w="65px"
                    h="15px"
                    _selected={{
                        color: "#8743FF",
                        bg: "white",
                        borderRadius: "5px",
                        fontWeight: "bold",
                    }}
                >
                    이름순
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <ProfileList users={users}/>
                </TabPanel>
                <TabPanel>
                    개발중...
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default ListDown;
