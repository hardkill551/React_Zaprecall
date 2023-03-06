import logo from "../assets/logo.png"
import styled from "styled-components"

export default function Header({trade}){
    return (
        <Title trade={trade}>
            <img src={logo} alt="Logo"></img>
            <h1>ZapRecall</h1>
        </Title> 
    )
}

const Title = styled.div`
display:${a=> a.trade===true?"flex":"none"};
align-items:center;
justify-content:center;
font-family:'Righteous', cursive;
position: fixed;
font-size:36px;
color:white;
height:130px;
width:100vw;
background-color:#FB6B6B;
z-index:1;
top:0px;
left:0px;
h1{
    display:flex;
    justify-content:center;
    width:203px;
    height: 40px;
}
img{
    width:52px;
    margin-left:5px;
}
`