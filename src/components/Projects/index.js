import React from 'react'
import {projects} from './data'
import {ProjectsContainer,ProjectsWrapper,Project,Cover} from './ProjectsElements'

const Projects=({id})=>{
    return(
    <>
    <ProjectsContainer id={id}>
    <h1>My Projects</h1>
    <ProjectsWrapper>
    {projects.map(project=>{
     return <Project key={project.id}>
     <a href={project.url} target="_blank"  rel="noreferrer" ><img src={project.img}/> 
    <Cover>
        <h2>{project.description}</h2>
        <div className='technologies'>
        {project.technologies.map(item=>{
            return <h4>{item}</h4>
        })}
        </div>
        </Cover>
        </a>
     </Project>
    })}
    </ProjectsWrapper>    
    </ProjectsContainer>
    </>
    )
}

export default Projects