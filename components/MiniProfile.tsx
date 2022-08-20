import { Box, Center} from "@chakra-ui/react";
import type { NextComponentType } from "next";

const MiniProfile: NextComponentType = () => {

    return (
        <Box minW="200px" minH="200px" bg="white">
            <Center>
                User Profile
            </Center>
        </Box>
    );
};

export default MiniProfile;
