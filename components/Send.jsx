import { FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react";
import CustomContainer from "./CustomContainer";

export default function Send() {
    return (
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">Send ETH</Text>
            <form>
                <FormControl mt="4">
                    <FormLabel htmlFor="amount">
                        Amount of ETH
                    </FormLabel>
                    <NumberInput step={0.1}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
            </form>
        </CustomContainer>
    )
}