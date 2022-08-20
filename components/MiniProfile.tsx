import { Box, Center} from "@chakra-ui/react";
import type { NextComponentType } from "next";

const MiniProfile: NextComponentType = () => {

    return (
        <Box minW="200px" maxW="200px" 
             minH="200px" maxH="200px"
             bg="white" m={2}>
            <Center>
                User Profile
            </Center>
        </Box>
    );
};

export default MiniProfile;
