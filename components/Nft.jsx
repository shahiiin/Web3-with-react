import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNFTBalances } from "react-moralis";
import CustomContainer from "./CustomContainer";
import Image from "next/image";

export default function Nft({ user }) {

    const { getNFTBalances, data } = useNFTBalances()

    useEffect(() => {
        getNFTBalances({
            params: {
                chain: "rinkeby",
                address: user.get("ethAddress")
            }
        })
    }, [])
    console.log(data,'aa')
    return (

        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">My Nfts</Text>
            {data && data.result.map(nft => (

                <Box key={nft.token_uri} mt="4" py="2" px="2" borderWidth="1px" borderRadius="md">
                    {nft.image && <Image src={nft.image} alt="nft"/>}
                    <p>{nft.token_uri}</p>
                </Box>


            ))}
        </CustomContainer>
    )
}