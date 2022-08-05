import { Button, Flex, Text } from "@chakra-ui/react"
import Head from "next/head"
import { useMoralis } from "react-moralis"


export default function Home() {
  const {isAuthenticated,authenticate} = useMoralis()
 if (!isAuthenticated){
  return(
    <>
    <Head>
      <title>Login |Dashboard</title>
    </Head>
    <Flex 
    direction="column" 
    justifyContent="center"
     alignItems="center"
     width="100vw"
     height="100vh"
     bgGradient="linear(to-br,teal.400,purple.300)"
     >
      <Text fontSize="5xl" fontWeight="bold" color="white">
        Dashboard3
      </Text>
      <Button
      onClick={()=>authenticate({
        
      })}
       colorScheme="purple" 
       size="lg" 
       mt="6">Login with Metamask</Button>
    </Flex>
    </>
  )
 }
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  )
}
    