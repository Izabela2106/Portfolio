import styled from 'styled-components'

export const ProjectsContainer=styled.section`

width:100%;
min-height:700px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1{
    color:rgba(255,255,255,0.9);
    font-size:50px;
    background-color:rgba(0,0,0);
    font-weight:200;
    width:100%;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    

}


`

export const ProjectsWrapper=styled.div`
display:grid;

grid-template-columns:1fr 1fr 1fr;
height:inherit;

@media screen and (max-width:1400px){
grid-template-columns:1fr 1fr ;
}
@media screen and (max-width:900px){
grid-template-columns:1fr ;
}


`

export const Project=styled.div`
position:relative;
height:350px;

a{
    height:inherit;
}
img{
width:100%;
height:100%;
object-fit:cover;


}
@media screen and (max-width:900px){
    height:450px;
        }


&:hover{
transition: all 0.3s ease-in-out;
cursor:pointer;
background-color:rgb(0,0,0,0.7);


}
`
export const Cover=styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
color:transparent;
background-color:transparent;
display:flex;
flex-direction:column;
transition: all 0.3s ease-in-out;
display:flex;
justify-content:center;
align-items:center;
h2{
    font-weight:100;
    text-transform:uppercase;

}
.technologies{
display:flex;
justify-content:center;

h4{
    margin:1rem;
    padding:5px;
    border-radius:5px;
    background-color:transparent;
}

}
}



&:hover{
color:rgb(255,255,255,0.7);
background-color:rgb(0,0,0,0.6);
transition: all 0.3s ease-in-out;
h4{
    background-color:rgb(0,0,0,0.8);
    transition: all 0.5s ease-in-out;
    transition-delay:0.4s;
    color:rgb(255,255,255,0.7)

}

}

`