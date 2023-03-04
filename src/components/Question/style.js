import styled from "styled-components";

const Card = styled.div`
    display: ${a => a.step!==0 && a.step<3? "none" : "flex"};
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


p{
  color:${a => {
    if(a.step===3){
      return "#2FBE34"
    }
    if(a.step===4){
      return "#FF922E"
    }
    if(a.step===5){
      return "#FF3030"
    }
  }
};
  text-decoration:${a => {
    if(a.step>=3){
      return "line-through"
    }
}
};
}
`

export default Card