import styled from 'styled-components'
import cssImg from '../../images/css-square.png';
import jsImg from '../../images/javascript-square.png';
import htmlImg from '../../images/html-square.png';
import reactImg from '../../images/react-square.png';


export const SkillsContainer=styled.section`
height:100;
width:100%;
display:flex;
flex-direction:row;


@media screen and (max-width:900px){
flex-direction:column;

}

`



export const SkillsWrapper=styled.div`
background-color:var(--skills-background);

width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem 0;

h1{
margin-bottom:3rem;
color:white;
font-size:40px;
font-weight:300;
}





`



export const Skill=styled.div`
width:80%;
text-align:center;
font-size:30px;
margin: 10px 0;
background-color:var(--skill-background);
font-weight:100;
padding:5px 0;
border-radius:2px;

&:hover{
background-color:rgba(255,255,255,0.5);
transform:scale(1.02);
transiton:all 0.2 ease-in-out;

}
@media screen and (max-width:1100px){
font-size:25px;

}



`

export const CubesWrapper=styled.div`
width:100%;
height:inherit;
display:grid;
grid-template-columns:1fr 1fr;
justify-content:center;
align-items:center;
padding:70px 0;
background-color:rgb(0,0,0,0.8);




#css{
background-image:url(${cssImg});
background-size: cover;
background-color:rgb(130,196,190);
box-shadow:-60px 60px 20px rgb(50 50 50 / 15%);

}
#css:before{
background:rgb(144,203,198)
}
#css:after{
background:rgb(144,203,198)
}


#html{
background-image:url(${htmlImg});
background-size: cover;
background-color:rgb(149, 184, 209);
box-shadow:-60px 60px 20px rgb(50 50 50 / 15%);

}
#html:before{
background:rgb(170, 198, 218)
}
#html:after{
background:rgb(170, 198, 218)
}

#js{
background-image:url(${jsImg});
background-size: cover;
background-color:rgb(201, 176, 232);
box-shadow:-60px 60px 20px rgb(50 50 50 / 15%);

}
#js:before{
background:rgb(212,193,236)
}
#js:after{
background:rgb(212,193,236)
}


#react{
background-image:url(${reactImg});
background-size: cover;
background-color:rgb(214, 213, 153);
box-shadow:-60px 60px 20px rgb(50 50 50 / 15%);

}
#react:before{
background:rgb(220, 219, 167)
}
#react:after{
background:rgb(220, 219, 167)
}
@media screen and (max-width:900px){
#js{
margin-top:120px;
}
#react{
margin-top:120px;
}
#css{
    margin-top:0px;
    }
    #html{
    margin-top:0px;
    }

    #js{
        margin-bottom:50px;
        }
        #react{
        margin-bottom:50px;
        }



}

@media screen and (max-width:400px){
grid-template-columns:1fr;


#html{
margin-top:80px;
}
#react{margin-top:50px};
}

#css{
    margin-top:30px;
}

`









export const CubeWrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;
`


export const Cube =styled.div`
width: 100px;
height: 100px;
transform: rotate(-25deg) skew(25deg);
&:before{
    position: absolute;
    content: '';
    width: 25px;
    height: 100%;
    transform: skewY(-45deg);
    left:-25px;
    bottom: -13px;
}

    &:after{
    position: absolute;
    content: '';
    width: 100%;
    height: 25px;;
    transform: skewX(-45deg);
    left:-12px;
    bottom: -25px;
    }



`
























