import { Button, Center, Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import { AnyNaptrRecord } from "dns";
import type { NextComponentType } from "next";
import Image from "next/image";
import HomeIcon from "../assets/home.svg";
import ProfileIcon from "../assets/profile.svg";
import ScrapeIcon from "../assets/scrape.svg";
import TeamIcon from "../assets/team.svg";
import HomeActiveIcon from "../assets/home_active.svg";
import ProfileActiveIcon from "../assets/profile_active.svg";
import ScrapeActiveIcon from "../assets/scrape_active.svg";
import TeamActiveIcon from "../assets/team_active.svg";

const BottomNav: any = ({active} : {active : string}) => {
    return (
        <Center
            position={"fixed"}
            bottom={0}
            left={0}
            right={0}
            height={84}
            borderTopRadius={8}
            boxShadow={"dark-lg"}
            bg="white"
            zIndex="1"
        >
            <Flex width="full" mx={10} justifyContent={"space-between"}>
                <VStack>
                    <Image
                        src={active === "home" ? HomeActiveIcon : HomeIcon}
                        alt="home"
                        width={22}
                        height={22}
                    />
                    <Text
                        fontSize={14}
                        color={active === "home" ? "gray.900" : "gray.500"}
                    >
                        홈
                    </Text>
                </VStack>
                <VStack>
                    <Image
                        src={
                            active === "scrape" ? ScrapeActiveIcon : ScrapeIcon
                        }
                        alt="scrape"
                        width={22}
                        height={22}
                    />
                    <Text
                        fontSize={14}
                        color={active === "home" ? "gray.900" : "gray.500"}
                    >
                        스크랩
                    </Text>
                </VStack>
                <VStack>
                    <Image src={TeamIcon} alt="home" width={22} height={22} />
                    <Text fontSize={14} color={"gray.500"}>
                        우리팀
                    </Text>
                </VStack>
                <VStack>
                    <Image
                        src={ProfileIcon}
                        alt="home"
                        width={22}
                        height={22}
                    />
                    <Text fontSize={14} color={"gray.500"}>
                        프로필
                    </Text>
                </VStack>
            </Flex>
        </Center>
    );
};

export default BottomNav;
