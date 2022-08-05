import { Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, useToast } from "@chakra-ui/react";
import Moralis from "moralis";
import { useState } from "react";
import { useWeb3Transfer } from "react-moralis";
import CustomContainer from "./CustomContainer";

export default function Send() {

    const [amount, setAmount] = useState(0)
    const handleChange = (value) => setAmount(value)
    const [receiver, setReseiver] = useState()
    const toast = useToast()
    const { fetch, isFetching } = useWeb3Transfer({
        amount: Moralis.Units.ETH(amount),
        receiver: receiver,
        type: "native"
    })


    return (
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">Send ETH</Text>
            <form onSubmit={async e => {
                e.preventDefault()
                await Moralis.enableWeb3()
                fetch({
                    onSuccess: () => {
                        toast({
                            title:"ETH succsesfully sent.",
                            description:"Fresh ETH are showing up into the receiver wallet",
                            status:"success",
                            duration:9000,
                            isClosable:true
                        })
                        setReseiver("")
                    },
                    onError: (error) => {

                    }
                })
            }}>
                <FormControl mt="4">
                    <FormLabel htmlFor="amount">
                        Amount of ETH
                    </FormLabel>
                    <NumberInput step={0.1} onChange={handleChange}>
                        <NumberInputField id="amount" value={amount} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormLabel mt="4" htmlFor="receiver">
                        Send to
                    </FormLabel>
                    <Input id="receiver" type="text" placeholder="Receiver address" value={receiver} onChange={e => setReseiver(e.target.value)} />
                </FormControl>
                <Button mt="4" type="submit" colorScheme="purple">Send</Button>
            </form>
        </CustomContainer>
    )
}