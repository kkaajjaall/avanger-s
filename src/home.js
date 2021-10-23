import React from 'react'
import "./app.css"
import Header from './header';
import Navbar from './navbar';
import Char from "./char"
import Contact from './contact';
import Footer from"./footer";

const Home = () => {
    return (
        <>
          <Navbar/> 
          <Header/>
          <Char/>
          <Contact/>
          <Footer/>
        </>
    )
}

export default Home;
