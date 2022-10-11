import React,{useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Layout } from 'antd';
import Spotify from '../src/images/Spotify.png'
import { Input, Space } from 'antd';
import AudioPlayer from '../src/pages/AudioPlayer'
const { Search } = Input;



const { Header, Footer, Sider, Content } = Layout;
const onSearch = (value) => console.log(value);
const App = () => {
  const [albumData,setAlbumData]=useState()
  return(<div class="hello">
    <Layout >
    <Sider>
  <img class="spotifyImg" src={Spotify}/>
  <div class="search">
  <Search placeholder="input search text" onSearch={onSearch} enterButton />
  </div>
   
    </Sider>
    <Layout>
     
      <Content class="container"><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album" element={<Album setAlbumData={setAlbumData}/>} />
    </Routes></Content>
    <Footer style={{'background-color': 'rgb(0,21,70)', 'position': 'sticky'}}>
      {albumData && 
      <AudioPlayer url={albumData} />
      }
    
    </Footer>
    </Layout>
  
  </Layout>
  </div>
   
   
  )
};

export default App;
