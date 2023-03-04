import styled from "styled-components";

export const Card = styled.div`
  display: ${a => a.step!==2 ? "none" : "flex"};
  flex-direction: column;
  justify-content: space-between;
  padding-top: 18px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #ffffd4;
  border-radius: 5px;
  width: 300px;
  height: 131px;
  margin-bottom: 25px;
`;

export const Button = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    margin-bottom:10px;

button{
    width:85px;
    height:38px;
    border:0px;
    border-radius:5px;
    color:white;
    font-family:"Recursive", sans-serif;
}

button:first-child{
    background-color:#FF3030;
}
button:nth-child(2){
    background-color:#FF922E;
}
button:nth-child(3){
    background-color:#2FBE34;
}
`;