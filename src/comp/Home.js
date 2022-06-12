import React from 'react'
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from './Navbar';
import Sell from './Sell';


const Home = () => {
  return (
        <div> 
            <Navbar/>                   
            <Header/>
            <Body/>
            <Sell/>
            <Footer/>
        </div>
  )
}

export default Home