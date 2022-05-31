import React from 'react'
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from './Navbar';


const Home = () => {
  return (
        <div> 
            <Navbar/>                   
            <Header/>
            <Body/>
            <Footer/>
        </div>
  )
}

export default Home