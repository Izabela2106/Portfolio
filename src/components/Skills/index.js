import React from 'react'
import {data} from './data.js'
import {cubes} from './data.js'

import {SkillsContainer, SkillsWrapper,CubesWrapper,Skill,Cube,CubeWrapper} from './SkillsElements'


const Skills=({id})=>{
    return(
    <SkillsContainer id={id}>
        
         <CubesWrapper>
        {cubes.map(cube=>{
         return <CubeWrapper key={cube.id}><Cube id={cube.id}/></CubeWrapper>})}
        </CubesWrapper>
        
        <SkillsWrapper>
        <h1>Skills</h1>
        {data.map(skill=>{
         return <Skill key={skill.id}>{skill.text}</Skill>
        })}
        </SkillsWrapper>
        </SkillsContainer>
        )
}

export default Skills