import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header({ user, logout,isLoggingOut }) {
    return (
        <header>
            <Flex
                justifyContent="space-between"
                bg="purple.400"
                color="white"
                px="10"
                py="6"
            >
                <Center>
                    <Text
                        fontFamily="xl"
                        fontWeight="bold"
                    >
                        Dashboard</Text>
                </Center>
                <Center>
                    <Text>{user.getUsername()}</Text>
                    <Button onClick={logout} ml="4"
                     colorScheme="purple"
                     disabled={isLoggingOut}
                     >Logout</Button>
                </Center>
            </Flex>

        </header>
    )
}