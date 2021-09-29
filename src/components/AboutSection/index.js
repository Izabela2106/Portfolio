
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
    <h3>I'm student of Computer Science faculty and aspiring front-end developer looking for my first job. I enjoy learning new things, problem solving and coding. Last few months I focused on improving my website development skills and I have worked on technologies like JavaScript, React, CSS, HTML, TypeScript.
 </h3>   
   <Button to='projects'  onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>Projects {hover ? <ArrowForward/> : <ArrowRight/>}</Button>

   </Description>
   </AboutContainer>
        
        
    )
}


export default About