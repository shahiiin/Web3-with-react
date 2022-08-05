import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import CustomContainer from "./CustomContainer";


export default function Transactions({ user }) {


    const Web3Api = useMoralisWeb3Api()

    const [transactions, setTransactions] = useState([])

    const BASE_URL = "https://rinkeby.etherscan.io/tx/"

    const fetchTransactions = async () => {
        const data = await Web3Api.account.getTransactions({
            chain: "rinkeby",
            address: user.get('ethAddress'),
            limit:1
        })
        if (data) {
            setTransactions(data.result)
        }
    }
    useEffect(() => {
        fetchTransactions()
    }, [])
    console.log(transactions, 'aa')

    return (
        <CustomContainer>
            <Text>My last 1 Transactions</Text>
        </CustomContainer>
    )
}