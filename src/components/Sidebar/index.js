import React from 'react'

import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SidebarRoute,SideBtnWrap} from "./SidebarElements"
import {NavBtnLink} from '../Navbar/NavbarElements'
import {AiFillGithub} from 'react-icons/ai'

const Sidebar=({toggle,isOpen})=>{
    return(
    <SidebarContainer isOpen={isOpen}>
        <Icon>
        <CloseIcon onClick={toggle}/>
        </Icon>
        
        <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to='about' onClick={toggle} offset={-80}>About</SidebarLink>
        <SidebarLink to='skills' onClick={toggle} offset={-80}>Skills</SidebarLink>
        <SidebarLink to='projects' onClick={toggle} >Projects</SidebarLink>
        <NavBtnLink > <a target="_blank" href='https://github.com/Izabela2106'><AiFillGithub/></a></NavBtnLink>

        </SidebarMenu>
        </SidebarWrapper>
  
        
        </SidebarContainer>
    )
}

export default Sidebar