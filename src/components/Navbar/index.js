import React,{useState,useEffect} from 'react'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from "./NavbarElements"
import {FaBars} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from  'react-scroll'
import {BsPersonBoundingBox} from 'react-icons/bs'



const Navbar=({toggle})=>{
    const [scrollNav,setScrollNav]=useState(false);
    
    const changeNav=()=>{
        if(window.scrollY>=80){
            setScrollNav(true);
        }
        else{
          setScrollNav(false)  
        }
        
    }
    
    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',changeNav);
    },[])
    
    
    return <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav scrollNav={scrollNav}>
        <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}><BsPersonBoundingBox/></NavLogo>
        <MobileIcon onClick={toggle}><FaBars/></MobileIcon>
        <NavMenu>
            <NavItem>
            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
            </NavItem>
            
            <NavItem>
            <NavLinks to='skills' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLinks>
            </NavItem>
            
            
            <NavItem>
            <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
            </NavItem>
            
            
            </NavMenu>
            
            <NavBtn>
                <NavBtnLink > <a target="_blank" href='https://github.com/Izabela2106'><AiFillGithub/></a></NavBtnLink>
            </NavBtn>
        </NavbarContainer>
        </Nav>
                </IconContext.Provider>
        </>
}

export default Navbar;

