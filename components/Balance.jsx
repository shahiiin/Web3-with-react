import { Text } from '@chakra-ui/react'
import Moralis from 'moralis'
import { useEffect, useState } from 'react'
import { useMoralisWeb3Api } from 'react-moralis'
import CustomContainer from './CustomContainer'


export default function Balance({ user }) {

    const [ethBalance, SetEthBalance] = useState(0)

    const Web3Api = useMoralisWeb3Api()

    const fetchNativeBalance = async () => {
        const result = await Web3Api.account.getNativeBalance({
            chain: "rinkeby",
            address: user.get('ethAddress')
        }).catch(e => console.log(e))
        if (result.balance) {
            SetEthBalance(Moralis.Units.FromWei(result.balance))
        }
    }
    useEffect(() => {
        fetchNativeBalance()
    }, [])

    return (

        <CustomContainer>
            <Text>My ERC20 Tokens</Text>
            {ethBalance && <Text>💰{ethBalance}ETH</Text>}
        </CustomContainer>
    )
}