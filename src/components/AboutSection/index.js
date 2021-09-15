
import {Button} from '../Button/ButtonElements'
import {useState} from 'react'
import { BgContainer,AboutContainer,Description,ImageContainer} from './AboutElements'
import{ArrowForward,ArrowRight} from '../Hero/HeroElements'
import img from '../../images/heroImg.jpg'


const About=()=>{
    const [hover,setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover)
    }

   
    return (
   <AboutContainer id='about'>
       <BgContainer>
       <ImageContainer src={img}/>
       </BgContainer>
   <Description>
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>   
   <Button to='projects'  onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>Projects {hover ? <ArrowForward/> : <ArrowRight/>}</Button>

   </Description>
   </AboutContainer>
        
        
    )
}


export default About