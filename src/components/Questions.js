import styled from "styled-components"
import Question from "./Question/Question"



export default function Questions({flashCard, ct, setCt, trade, icons, setIcons}){ 
    return (
        <Box trade={trade} icons={icons.length}>
            {flashCard.map((q, index) => 
            <Question array={q} index={index} key={index} ct={ct} setCt={setCt} setIcons={setIcons}/>
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
    margin-bottom:${(a) => (a.icons===8 ? "170px" : "70px")};
`