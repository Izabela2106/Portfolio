import React ,{useState} from 'react'

import{HeroBg,VideoBg,HeroContainer,HeroContent,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import Video from "../../videos/video.mp4"
import {Button} from '../Button/ButtonElements'

const Hero=()=>{
    
    const [hover,setHover]=useState(false);
    const [primary,setPrimary]=useState(true)
    const onHover=()=>{
        setHover(!hover)
    }
    return (
    <HeroContainer>
        
        <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
         <HeroContent>
        <h1>Izabela Nowak</h1>
        <p>Front-end-developer</p>
        <HeroBtnWrapper>
        <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover}  primary='true' dark='true'>Learn more {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
        </HeroBtnWrapper>
        </HeroContent>
        
        </HeroContainer>
    )
}


export default Hero