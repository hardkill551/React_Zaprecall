import styled from "styled-components"
import Question from "./Question"
import cards from "../constants/cards"
import { useState } from "react"
import Asking from "./Asking"
import Answer from "./Answer/Answer"



export default function Questions(){ 
    const [flashCard, setFlashCard] = useState(cards)
    console.log(flashCard)
    return (
        <Box>
            {flashCard.map((q, index) => 
            <div  key={index}>
            <Question array={q} setFlashCard={setFlashCard} index={index}/>
            <Asking array={q} setFlashCard={setFlashCard} index={index}/>
            <Answer array={q} setFlashCard={setFlashCard} index={index}/>
            </div>)}
        </Box>
    )
}

const Box = styled.div`
    display:flex;
    justify-content:center;
    margin-top:160px;
    flex-direction:column;
    align-items:center;
    margin-bottom:65px;
`