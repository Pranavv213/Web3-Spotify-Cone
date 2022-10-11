import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from 'antd';
import {library} from '../helpers/albumList'
import { useMoralis } from "react-moralis";
const Home = () => {
  const { isAuthenticated,authenticate, account,Moralis } = useMoralis();
return(
  <>
  <div><button onClick={()=>{ 
    authenticate()
  }}>authenticate</button></div>
  <div className="container">
    
     <Tabs defaultActiveKey="1" centered>
    <Tabs.TabPane tab="FEATURED" key="1">
      <div class="featured">
      {library.map((e)=>{
        return (
          <div class="featuredDiv">
            {isAuthenticated ? <Link state={e} to="/album" className="link">
            <img class="featuredImg" src={e.image}/>
            <div class="featuredTitle">
            {e.title}
            </div>
            </Link>:
            <div>
            <img class="featuredImg" src={e.image}/>
            <div class="featuredTitle">
            {e.title}
            </div>
            </div>
            }
            
            </div>
            
            
        )
      })}
      </div>
    </Tabs.TabPane>
    <Tabs.TabPane tab="GENRES & MOODS" key="2">
    <div class="featured">
      {library.reverse().map((e)=>{
        return (
          <div class="featuredDiv">
            <img class="featuredImg" src={e.image}/>
            <div class="featuredTitle">
            {e.title}
            </div>
            </div>
            
            
        )
      })}
      </div>
    </Tabs.TabPane>
    <Tabs.TabPane tab="NEW RELEASE" key="3">
    <div class="featured">
      {library.slice(0,5).reverse().map((e)=>{
        return (
          <div class="featuredDiv">
            <img class="featuredImg" src={e.image}/>
            <div class="featuredTitle">
            {e.title}
            </div>
            </div>
            
            
        )
      })}
      </div>
    </Tabs.TabPane>
  </Tabs>
  </div>
  </>
)
}

export default Home;
