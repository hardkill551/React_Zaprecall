import styled from "styled-components"

export default function Footer({flashCard, ct}){
    return (
        <Bottom data-test="footer">
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
display:flex;
justify-content:center;
align-items:center;
font-size:18px;
z-index:1;
`