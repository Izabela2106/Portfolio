import React from 'react'
import {BsPersonBoundingBox} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'



import {FooterContainer,FooterWrap,SocialLogo} from './FooterElements'


const Footer=()=>{
    return(
    <FooterContainer>
        <FooterWrap>
            
            <h3>izan2@poczta.onet.pl</h3>
            
            <a target="_blank" href='https://github.com/Izabela2106' rel="noreferrer"><AiFillGithub/></a>

        </FooterWrap>
        </FooterContainer>
    )
}

export default Footer