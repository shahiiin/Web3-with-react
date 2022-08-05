import { Button, Flex, Text } from "@chakra-ui/react"
import Head from "next/head"
import { useMoralis } from "react-moralis"


export default function Home() {
  const {isAuthenticated} = useMoralis()
 if (!isAuthenticated){
  return(
    <>
    <Head>
      <title>Login |Dashboard</title>
    </Head>
    <Flex>
      <Text>
        Dashboard3
      </Text>
      <Button>Login with Metamask</Button>
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
    