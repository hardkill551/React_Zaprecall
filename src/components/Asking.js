import styled from "styled-components"
import virar from "../assets/seta_virar.png"

export default function Asking({array}){
    return(
        <Card>
            <p>{array.question}</p>
            <img src={virar} alt={"virar"}></img>
        </Card>
    )
}

const Card = styled.div`
    display:none;
    justify-content:space-between;
    padding-top:18px;
    padding-left: 15px;
    padding-right: 15px;
    background-color:#FFFFD4;
    border-radius:5px;
    width:300px;
    height:131px;
    margin-bottom:25px;
    position: relative;

img{
    position: absolute;
    bottom:6px;
    right: 15px;
    width:30px;
}
`