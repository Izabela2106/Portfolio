import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const FooterContainer=styled.div`
background-color:#101522;
color:white;

`

export const FooterWrap=styled.div`
padding:48px 24px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
max-width:1100px;
margin 0 auto;
color:white;
a{
    color:white;
    margin-top:1rem;
    font-size:30px;
}
`





export const SocialLogo=styled(Link)`
color:#fff;
justify-self:start;
cursor:pointer;
text-decoration:none;
font-size:1.5rem;
display:flex;
align-items:center;
margin-bottom:16px;
font-weight:bold;
`

