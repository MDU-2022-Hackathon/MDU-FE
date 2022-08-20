import { Button, Center, Flex } from "@chakra-ui/react";
import type { NextComponentType } from "next";

const BottomNav: NextComponentType = () => {
    return (
        <Center
            position={"fixed"}
            width="full"
            bottom={0}
            height={84}
            borderTopRadius={8}
            boxShadow={"dark-lg"}
            bg="white"
        >
            <Flex width="full" mx={20} justifyContent={"space-between"}>
                <Button>홈</Button>
                <Button>스크랩</Button>
                <Button>우리팀</Button>
                <Button>프로필</Button>
            </Flex>
        </Center>
    );
};

export default BottomNav;
