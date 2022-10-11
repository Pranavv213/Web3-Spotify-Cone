import {useMoralis, useMoralisWeb3Api} from "react-moralis"
import {useEffect,useState} from "react"

export const useAlbum=(contract)=>{

    const {token}=useMoralisWeb3Api();
    const {isInitialized}=useMoralis();
    const [albumDetails,setAlbumDetails]=useState([])
    const fetchAllTokenIds = async () => {
        const options = {
          address: "0x35827BD335BfAE219618FCe2D89e86E20bbe29BF",
          chain: "mumbai",
        };
        const NFTs = await token.getAllTokenIds(options);
        // console.log(NFTs.result[0]);
        setAlbumDetails(NFTs.result[0])
      };
      useEffect(()=>{
        if(isInitialized)
        {
            fetchAllTokenIds()
        }
      },[isInitialized,contract])

return {albumDetails}

}