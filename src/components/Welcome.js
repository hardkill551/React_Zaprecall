import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Welcome({trade, setTrade}){
    return (
        <Background trade={trade}>
            <img src={logo}></img>
            <p>ZapRecall</p>
            <button data-test="start-btn" onClick={a => setTrade(true)}>Iniciar Recall!</button>
        </Background>
    )
}

const Background = styled.div`
background-color:#FB6B6B;
width:100vw;
height: 100vh;
display:${a=> a.trade===false?"flex":"none"};
flex-direction:column;
justify-content:center;
align-items:center;


img{
    width:136px;
    height:161px;
}
p{
    font-size:36px;
    color:white;
    font-family:"Righteous", sans-serif;
    margin-bottom:30px;
    margin-top:30px;
}

button{
    background-color:white;
    height:54px;
    width: 246px;;
    border:1px solid #D70900;
    border-radius:5px;
    color:#D70900;
    font-family:"Recursive", sans-serif;
    font-weight:400;
    font-size:18px;
}
`