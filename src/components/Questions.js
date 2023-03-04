import styled from "styled-components"
import Question from "./Question/Question"



export default function Questions({flashCard, setFlashCard, ct, setCt, trade}){ 
    return (
        <Box trade={trade}>
            {flashCard.map((q, index) => 
            <Question array={q} setFlashCard={setFlashCard} index={index} key={index} ct={ct} setCt={setCt}/>
            )}
        </Box>
    )
}

const Box = styled.div`
    display:${a=> a.trade===true?"flex":"none"};
    justify-content:center;
    margin-top:160px;
    flex-direction:column;
    align-items:center;
    margin-bottom:65px;
`