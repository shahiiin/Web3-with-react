import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import CustomContainer from "./CustomContainer";

export default function Profile ({user}){
    const [input,setInput] =useState('')
    const {setUserData,isUserUpdating} =useMoralis()
   
    return(
      <CustomContainer>
        <Text> username:{user.getUsername()}</Text>
        <Text> Wallet Address:{user.get('ethAddress')}</Text>
        <form onSubmit={e=>{
            e.preventDefault()
            if(input.trim() !== "") {
                setUserData({
                    username:input,
                  }).then(()=>setInput(''))
            }
        }}>
            <FormControl mt="6" mb="6">
                <FormLabel htmlFor="username">Set a new username</FormLabel>
                <Input id="username" type="text"
                 placeholder="ex. theItalianDev"
                 value={input}
                 onChange={e=>setInput(e.target.value)}
                 />
            </FormControl>
            <Button type="submit" colorScheme="purple"disabled={isUserUpdating}>Change username</Button>
        </form>
      </CustomContainer>
    )
}