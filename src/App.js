import Footer from "./components/Footer";
import Header from "./components/Header";
import Questions from "./components/Questions";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";


export default function App() {
  return (
    <Body>
      <GlobalStyle />
      <Header />
      <Questions />
      <Footer />
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