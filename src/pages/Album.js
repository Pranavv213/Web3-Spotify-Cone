import React,{useEffect,useState} from 'react';
import { Link,useLocation } from 'react-router-dom';
import "./Album.css"
// import {albumDetails} from '../helpers/apiCallResponse'
import opensea from '../images/opensea.png'
import { Button } from 'antd';
import {useMoralis, useMoralisWeb3Api} from "react-moralis"


const Album = ({setAlbumData}) => {
  const {token}=useMoralisWeb3Api();
const {isInitialized}=useMoralis();
const [albumDetails,setAlbumDetails]=useState()
const fetchAllTokenIds = async () => {
  const options = {
    address: "0x35827BD335BfAE219618FCe2D89e86E20bbe29BF",
    chain: "mumbai",
  };
  const NFTs = await token.getAllTokenIds(options);
  console.log(NFTs.result[0]);
  setAlbumDetails(NFTs.result[0])
};
  useEffect(()=>{
    if(isInitialized)
    {
        fetchAllTokenIds()
    }
  },[])
  const {state:album}=useLocation();
  const [q,setQ]=useState(1)
  return (
  <>
  <div className="container">
  <Link to="/" className="link">Home</Link>
  <div class="albumHeader"> 
  <img class="albumImg"src={album.image}/>
  <div class="album2">
    <p>ALBUM</p>
    <h1>{album.title}</h1>
    {/* <h4>{JSON.parse(albumDetails[0].metadata).artist}</h4>
    <h5>{JSON.parse(albumDetails[0].metadata).year} &nbsp; {albumDetails.length} songs </h5> */}
    
  </div>
 
 
  
  </div>
<div></div>
<br></br>
<br></br>
<div class="albumPlay">
<div class="openseaDiv" onClick={()=>{
  setAlbumData(albumDetails)
}}>
&nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  Play
  &nbsp;
  &nbsp;
  <img  class="opensea" src="https://static.vecteezy.com/system/resources/previews/001/186/943/non_2x/green-play-button-png.png"/></div>
  &nbsp;
  &nbsp;
<div onClick={()=>{
  window.open(`https://testnets.opensea.io/assets/mumbai/${album.contract}/1`)
}}class="openseaDiv">
&nbsp;
  &nbsp;
  OpenSea
  &nbsp;
  &nbsp;
  <img  class="opensea" src={opensea}/></div>
  </div>
  <div class="albumSongs">
    <button onClick={()=>{
      setQ(q+1)
    }}>click</button>
    {/* {albumDetails.name} */}
  {/* {albumDetails && albumDetails.map((e)=>{
    return (
      <div>
        <div >
        {e.name}
        </div>
       <div style={{'background-color':'black','width':'50em','height':'0.04em'}}></div>
      </div>
    )
  })} */}
  </div>
  </div>
  </>
)
}

export default Album;
