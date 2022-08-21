import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image"
import type { NextComponentType } from "next";
import { Icon, EditIcon } from '@chakra-ui/icons'
import { FiLogOut } from 'react-icons/Fi';


const ProfileHeader: NextComponentType = () => {

    return (
        <Center position={"fixed"} top={0} left={0} right={0} height={84} bg="white" px="20px" zIndex="1" borderBlockEnd="2px" borderColor="rgb(205, 205, 205)">

            <EditIcon position={"fixed"} top={"40px"} left={"20px"} h="24px" color="rgb(112, 112, 112)" />
            <Icon as={FiLogOut} position={"fixed"} top={"40px"} right={"20px"} h="24px" color="rgb(112, 112, 112)"/>
            <Center position={"fixed"} top={"38px"}
                  fontSize="20px" fontWeight="bold" w="80px" h="24px">
                프로필
            </Center>
        </Center>
    );
};

export default ProfileHeader;