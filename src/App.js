import Footer from "./components/Footer";
import Header from "./components/Header";
import Questions from "./components/Questions";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import cards from "./constants/cards"
import { useState } from "react";
import Welcome from "./components/Welcome";


export default function App() {
  let [ct, setCt] = useState(0)
  const [trade, setTrade] = useState(false)
  return (
    <Body>
      <GlobalStyle />
      <Welcome trade={trade} setTrade={setTrade}/>
      <Header trade={trade}/>
      <Questions flashCard={cards} ct={ct} setCt={setCt} trade={trade}/>
      <Footer flashCard={cards} ct={ct} trade={trade}/>
    </Body>
  );
}


const Body = styled.div`
color:#333333;
box-sizing: border-box;
background-color:#FB6B6B;
border: 1px solid #dbdbdb;
height:100%;
font-family: 'Recursive', sans-serif;
font-weight:400;
`