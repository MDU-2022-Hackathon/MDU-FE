import { Box, Flex, Image } from "@chakra-ui/react";
import type { NextComponentType } from "next";

const Jandi: NextComponentType = () => {
    const ID = "esl-0604";
    const JandiLink = "https://ghchart.rshah.org/" + ID;

    return (
        <Flex width="full" mx={20} justifyContent={"space-between"}>
            <Box backgroundColor={"gray.100"}>
                <Image src={JandiLink} />
            </Box>
        </Flex>
    );
};

export default Jandi;
