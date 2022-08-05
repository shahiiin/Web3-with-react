import { Text } from "@chakra-ui/react";
import CustomContainer from "./CustomContainer";

export default function Profile ({user}){
    return(
      <CustomContainer>
        <Text> username:{user.getUsername()}</Text>
        <Text> Wallet Address:{user.get('ethAddress')}</Text>
      </CustomContainer>
    )
}