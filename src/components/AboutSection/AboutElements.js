import styled from 'styled-components'


export const AboutContainer=styled.section`
height:600px;
position:relative;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem 0;




`
export const ImageContainer=styled.img`
width:100%;
height:100%;
object-fit:cover;
opacity:0.2;
`

export const BgContainer=styled.div`
position:absolute;
right:0;
bottom:0;
right:0;
width:100%;
height:100%;
overflow:hidden;

`

export const Description=styled.div`
position:absolute;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
z-index:3;
h3{
    margin: 2rem 4rem;

    @media screen and (max-width:500px){
        font-size:14px;
    }
    @media screen and (max-width:300px){
        font-size:12px;
        }
}
`