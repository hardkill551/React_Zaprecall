import styled from "styled-components";
import seta from "../assets/seta_play.png"

export default function Question({array, index}) {

  return (
    <Card>
      <p>{`Pergunta ${index+1}`}</p>
      <img src={seta} alt="seta"></img>
    </Card>
  );

    
}

const Card = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left: 15px;
    padding-right: 15px;
    background-color:white;
    border-radius:5px;
    width:300px;
    height:65px;
    margin-bottom:25px;
    font-weight:700;
`
