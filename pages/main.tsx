import { TabPanel, TabPanels, Container, Tab, TabList, Tabs } from "@chakra-ui/react";
import type { NextPage } from "next";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header/Header";
import ListLeft from "../components/ListLeft";
import ListDown from "../components/ListDown";
import { useState } from "react";
import axios from "axios";
import { apiURI } from "../config";


const Home: NextPage = () => {     

    const [dev1, setDev1] = useState([]);
    const [des1, setDes1] = useState([]);
    const [pm1, setPm1] = useState([]);

    const [dev2, setDev2] = useState([]);
    const [des2, setDes2] = useState([]);
    const [pm2, setPm2] = useState([]);

    const getUsers = async () => {
        const res1 = await axios.get(`${apiURI}/`);
        const body1 = res1.data;
        setDev1(body1["developer"]);
        setDes1(body1["designer"]);
        setPm1(body1["pm"]);

        const res2 = await axios.get(`${apiURI}/`);
        const body2 = res1.data;
        setDev2(body2["developer"]);

        const res3 = await axios.get(`${apiURI}/`);
        const body3 = res1.data;
        setDes2(body3["designer"]);

        const res4 = await axios.get(`${apiURI}/`);
        const body4 = res1.data;
        setPm2(body4["pm"]);
    }

    
    // const dev1 : any = [
    //     {
    //       normal: {
    //         type: 'developer',
    //         stack: [Array],
    //         'self-introduction': '안녕하세요. 제 이름은 최유정'
    //       },
    //       identification: {
    //         name: '최유정',
    //         number: '01095840254',
    //         email: 'yuvely@naver.com',
    //         mbti: 'estp',
    //         school: '성균관대학교',
    //         image: 'imagelink',
    //         githubId: 'yuvely'
    //       }
    //     }
    //   ];
    // const pm1 : any = [{
    //     normal: {
    //       type: 'pm',
    //       stack: [Array],
    //       image: 'url',
    //       'self-introduction': '안녕하세요. 제 이름은 이예림. ~ ',
    //       awards: [Array]
    //     },
    //     identification: {
    //       name: '이예림',
    //       number: '01025468555',
    //       email: 'asdbn31@gmail.com',
    //       mbti: 'enfj',
    //       school: '서강대학교',
    //       image: 'imagelink',
    //       githubId: 'yerim23'
    //     }
    //   }];
    // const des1 : any = [{
    //     normal: {
    //       type: 'designer',
    //       stack: [Array],
    //       'self-introduction': '안녕하세요. 제 이름은 김건. ~ ',
    //       awards: [Array]
    //     },
    //     identification: {
    //       name: '김건',
    //       number: '01092034071',
    //       email: 'gunpoll823@gmail.com',
    //       mbti: 'intp',
    //       school: '고려대학교',
    //       image: 'imagelink',
    //       githubId: 'KmGun'
    //     }
    //   }];

   
    return (
        <Container px="0px" maxW="full" maxH="full" m={0}>
            {/* 고정 상단바 */}
            <Header />

            {/* 고정 하단바 */}
            <BottomNav active="home"/>

            {/* 내용 */}
            <Tabs w={"full"} isFitted colorScheme={"brand"}>
                <TabList position="fixed" bg="white" 
                    top={"84px"} left={0} right={0} px="20px"
                    color="rgb(112, 112, 112)" zIndex="1">
                    <Tab fontSize="15px" borderBlockEndWidth="4px" >추천</Tab>
                    <Tab fontSize="15px" borderBlockEndWidth="4px" >개발자</Tab>
                    <Tab fontSize="15px" borderBlockEndWidth="4px" >디자이너</Tab>
                    <Tab fontSize="15px" borderBlockEndWidth="4px" >기획자</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel mt={"160px"} p={0}>
                        <ListLeft users={dev1} type={"dev"} />
                        <ListLeft users={des1} type={"des"} />
                        <ListLeft users={pm1} type={"pm"}/>
                    </TabPanel>
                    <TabPanel mt={"125px"} p={0}>
                        <ListDown users={dev2}/>
                    </TabPanel>
                    <TabPanel mt={"125px"} p={0}>
                        <ListDown users={des2} />
                    </TabPanel>
                    <TabPanel mt={"125px"} p={0}>
                        <ListDown users={pm2} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
};

export default Home;
