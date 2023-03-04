import styled from "styled-components"
import Question from "./Question"
import cards from "../constants/cards"
import { useState } from "react"
import Asking from "./Asking"
import Answer from "./Answer/Answer"



export default function Questions(){ 
    return (
        <Box>
            {cards.map((q, index) => <Question array={q} index={index} key={index}/>)}
            {cards.map((q, index) => <Asking array={q} index={index} key={index}/>)}
            {cards.map((q, index) => <Answer array={q} index={index} key={index}/>)}
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