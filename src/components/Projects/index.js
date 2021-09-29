import React from 'react'
import {projects} from './data'
import {ProjectsContainer,ProjectsWrapper,Project,Cover} from './ProjectsElements'
import {AiFillGithub} from 'react-icons/ai'
import {MdArrowForward} from 'react-icons/md'



const Projects=({id})=>{
    return(
    <>
    <ProjectsContainer id={id}>
    <h1>My Projects</h1>
    <ProjectsWrapper>
    {projects.map(project=>{
     return <Project key={project.id}>
     <img src={project.img} alt='img'/> 
    <Cover>
        <h2>{project.description}</h2>
        <div className='technologies'>
        {project.technologies.map(item=>{
            return <h4 key={item.id}>{item}</h4>
        })}
        </div>
        <div className='links'>
        <a href={project.url} target="_blank"  rel="noreferrer" className='viewLink link'>Live    <MdArrowForward/></a>
        <a href={project.github} target="_blank"  rel="noreferrer" className='githubLink link'><AiFillGithub/></a>

        </div>
        </Cover>
        
     </Project>
    })}
    </ProjectsWrapper>    
    </ProjectsContainer>
    </>
    )
}

export default Projects