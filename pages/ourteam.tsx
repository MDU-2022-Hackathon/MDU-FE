import { Container, Button, VStack, Center, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
import OurTeamHeader from "../components/Header/OurTeamHeader";
import NoTeamBody from "../components/NoTeamBody";
import YesTeamBody from "../components/YesTeamBody";

const Home: NextPage = () => {

    const [teamates, setTeamates] = useState(true);

    return (
        <Container px="0px" maxW="full" maxH="full" m={0}>
            {/* 고정 상단바 */}
            <OurTeamHeader />

            {/* 고정 하단바 */}
            <BottomNav active="team" />

            {/* 메인 Body */}
            {teamates===false ? <NoTeamBody /> : <YesTeamBody />}
            
        </Container>
    );
};

export default Home;