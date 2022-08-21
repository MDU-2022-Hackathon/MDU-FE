import {
    Flex,
    Tab,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";
import type { NextComponentType } from "next";
import MiniProfile from "./MiniProfile";

const ProfileList: any = (props : any) => {

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
        <Flex
            mt="7px"
            pl="13px"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-around"
            >
            {users && users.map((user : any, i : number) => {
                    return (<MiniProfile key={i} user={user}/>);
                })}
        </Flex>

    );
};

export default ProfileList;