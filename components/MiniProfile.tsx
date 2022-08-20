import { Box, Center} from "@chakra-ui/react";
import type { NextComponentType } from "next";

const MiniProfile: NextComponentType = () => {

    return (
        <Box w={100} h={100} bg="white">
            <Center>
                User
            </Center>
        </Box>
    );
};

export default MiniProfile;
