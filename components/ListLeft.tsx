import { Box, HStack } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import MiniProfile from "./MiniProfile";

const ListLeft: any = (props : any) => {
   
    const users = props.users;
    const type = props.type;
    let text;
    if(type === 'dev'){
        text = "개발자를 추천합니다!"
    }
    else if(type === 'des'){
        text = "디자이너를 추천합니다!"
    }
    else{
        text = "기획자를 추천합니다!"
    }

    return (
        <Box py={0} mb={"40px"} width="full" pl="20px">
            <Box mx={"0px"} mb={"1px"}>
                {text}
            </Box>
            <HStack h="200px" alignItems="center" overflowX="scroll">
                {users && users.map(function(user : any, i: number){
                    return (<MiniProfile key={i} user={user} />);
                })}
            </HStack>
        </Box>
    );
};

export default ListLeft;
