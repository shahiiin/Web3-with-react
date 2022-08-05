import { Divider, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import CustomContainer from "./CustomContainer";


export default function Transactions({ user }) {


    const Web3Api = useMoralisWeb3Api()

    const [transactions, setTransactions] = useState([])

    const BASE_URL = "https://rinkeby.etherscan.io/"

    const fetchTransactions = async () => {
        const data = await Web3Api.account.getTransactions({
            chain: "rinkeby",
            address: user.get('ethAddress'),
            limit: 1
        })
        if (data) {
            setTransactions(data.result)
        }
    }
    useEffect(() => {
        fetchTransactions()
    }, [])
    

    return (
        <CustomContainer>
            <Text fontSize="xl" mb="6" fontWeight="bold">My last 5 Transactions</Text>
            {transactions && transactions.map(transaction => (
                <div key={transaction.hash}>
                    <Link href={`${BASE_URL}${transaction.hash}`} is isExternal>➡️{transaction.hash}</Link>
                    <Divider />
                </div>
            ))}
        </CustomContainer>
    )
}