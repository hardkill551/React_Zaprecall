import styled from "styled-components"

export default function Footer({flashCard, ct, trade}){
    return (
        <Bottom data-test="footer" trade={trade}>
            <p>{ct}/{flashCard.length} CONCLUÍDOS</p>
        </Bottom>
    )
}

const Bottom = styled.div`

position:fixed;
background-color:white;
height:70px;
width:100vw;
bottom:0px;
display:${a=> a.trade===true?"flex":"none"};
justify-content:center;
align-items:center;
font-size:18px;
z-index:1;
`