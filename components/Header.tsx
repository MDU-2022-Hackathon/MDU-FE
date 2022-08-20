import { SearchIcon } from "@chakra-ui/icons";
import { Box, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import type { NextComponentType } from "next";
import LogoNameImage from "../assets/logoname.png";

const Header: NextComponentType = () => {
    return (
        <Center
            position={"fixed"}
            top={0}
            left={0}
            right={0}
            height={84}
            bg="white"
            px="20px"
            zIndex="1"
        >
            <Flex
                width="full"
                mx={0}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Box>
                    <Image
                        src={LogoNameImage}
                        alt="logo"
                        width={85}
                        height={30}
                    />
                </Box>
                <SearchIcon color="rgb(170 170 170)" w={20.7} h={20.7} />
            </Flex>
        </Center>
    );
};

export default Header;
