import React from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'



export const Nav=styled.nav`
background:${({scrollNav})=>(scrollNav ? "#000" : 'transparent')};
magrin-top:-80px:
height: 80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;

@media screen and (max-width:960px){
transition: 0.8s all ease;
}
`


export const NavbarContainer=styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 1rem;

`

export const NavLogo=styled(LinkR)`
color: #fff;
justify-self:flex-start;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
font-width:bold;
font-size:3rem;
text-decoration:none;

`

export const MobileIcon=styled.div`
display:none;
color:#fff;
@media screen and (max-width:768px){
transform:transledted(-100%,60%);
font-size:1.8rem;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
}
`


export const NavMenu=styled.div`
display:flex;

align-items:center;
list-style:none;
text-align:center;
margin-right:-22px;

@media screen and (max-width:768px){
display:none;
}
`

export const NavItem=styled.li`
height:80px;
`

export const NavLinks=styled(LinkS)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height:100%;
cursor:pointer;

&.active{
border-bottom: 3px solid var(--primary-color);
}
`


export const NavBtn=styled.nav`
display:flex;
align-items:center;

@media screen and (max-width:768px){
display:none;
}`


export const NavBtnLink=styled.div`
padding:10px 22px;
color:#fff;
font-size:50px;
outline:none;
border:none;
cursor:pointer;


`

