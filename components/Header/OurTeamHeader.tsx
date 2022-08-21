import { Center, Text } from "@chakra-ui/react";
import type { NextComponentType } from "next";


const OurTeamHeader: NextComponentType = () => {

    return (
        <Center position={"fixed"} top={0} left={0} right={0} height={84} bg="white" px="20px" zIndex="1" borderBlockEnd="2px" borderColor="rgb(205, 205, 205)">
                <Center position={"fixed"} top={"38px"}
                  fontSize="20px" fontWeight="bold" w="80px" h="24px">
                    우리 팀
                </Center>
        </Center>
    );
};

export default OurTeamHeader;
