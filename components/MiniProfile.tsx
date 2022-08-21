import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const MiniProfile : any = (props : any) => {
    console.log("Mini");
    const user = props.user;
    
    console.log(user);

    let color;

    if(user.normal.type === 'pm'){
       color = 'blue';
    }
    else if(user.normal.type === 'developer'){
        color = 'yellow';
    }
    else{
        color = 'orange';
    }

    return (
        <Flex
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            minW="170px"
            maxW="170px"
            minH="170px"
            maxH="170px"
            border="1px"
            borderColor="gray.200"
            m={1}
            borderRadius="7px"
            boxShadow="md"
        >
            <Box
                w="91px"
                h="91px"
                borderRadius="70%"
                overflow="hidden"
                position="relative"
            >
                <Image
                    src=""
                    alt="profile"
                    width="100%"
                    height="100%"
                    layout="fill"
                />
            </Box>
            <Box
                w="140px"
                h="26px"
                borderBottom="solid"
                borderColor={color}
                textAlign="center"
                fontWeight="semibold"
                fontSize="13px"
                mb="7.6px"
            >
                {user.identification.name}
            </Box>
            <Box fontSize="10px" color="rgb(112, 112, 112)" overflow="hidden">
                {user.normal['self-introduction']}
            </Box>
        </Flex>
    );
};

export default MiniProfile;
