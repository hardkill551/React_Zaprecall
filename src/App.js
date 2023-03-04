import Footer from "./components/Footer";
import Header from "./components/Header";
import Questions from "./components/Questions";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import cards from "./constants/cards"
import { useState } from "react";


export default function App() {
  const [flashCard, setFlashCard] = useState(cards)
  let [ct, setCt] = useState(0)
  return (
    <Body>
      <GlobalStyle />
      <Header />
      <Questions flashCard={flashCard} setFlashCard={setFlashCard} ct={ct} setCt={setCt}/>
      <Footer flashCard={flashCard} setFlashCard={setFlashCard} ct={ct}/>
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