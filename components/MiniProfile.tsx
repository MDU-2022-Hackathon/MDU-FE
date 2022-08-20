import { Box, Center} from "@chakra-ui/react";
import type { NextComponentType } from "next";

const MiniProfile: NextComponentType = () => {

    return (
        <Box minW="150px" maxW="150px" 
             minH="150px" maxH="150px"
             bg="gray.100" m={1}>
            <Center>
                User Profile
            </Center>
        </Box>
    );
};

export default MiniProfile;
