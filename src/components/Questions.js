import styled from "styled-components"
import Question from "./Question/Question"



export default function Questions({flashCard, setFlashCard, ct, setCt}){ 
    return (
        <Box>
            {flashCard.map((q, index) => 
            <Question array={q} setFlashCard={setFlashCard} index={index} key={index} ct={ct} setCt={setCt}/>
            )}
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