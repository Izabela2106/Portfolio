import React ,{useState} from 'react'
import  Navbar from "../components/Navbar"
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import About from '../components/AboutSection'


const Home=()=>{
    
    const [isOpen,setIsOpen]=useState('false');
    
    
    const toggle=()=>{
        setIsOpen(!isOpen);
    }
    
    return(
    <>
      
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Hero/>
        <About/>

        <Skills id='skills'/>
        <Projects id='projects'/>
        <Footer/>


       
    
        </>
    )
}

export default Home 