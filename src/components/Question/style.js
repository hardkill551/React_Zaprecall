import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: ${(a) => (a.step !== 2 ? "row" : "column")};
  justify-content: space-between;
  align-items: ${(a) => (a.step === 0 || a.step >= 3 ? "center" : "start")};
  padding-top: ${(a) => (a.step === 2 || a.step === 1 ? "18px" : "auto")};
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${(a) =>
  a.step === 0 || a.step >= 3 ? "white" : "#FFFFD4"};
  border-radius: 5px;
  width: 300px;
  height: ${(a) => (a.step === 0 || a.step >= 3 ? "65px" : "131px")};
  margin-bottom: 25px;
  position: ${(a) => (a.step === 1 ? "relative" : "static")};
  font-weight: ${(a) => (a.step === 0 || a.step >= 3 ? "700" : "400")};

  img {
    position: ${(a) => {
      if (a.step === 1) {
        return "absolute";
      }
    }};
    bottom: ${(a) => {
      if (a.step === 1) {
        return "6px";
      }
    }};
    right: ${(a) => {
      if (a.step === 1) {
        return "15px";
      }
    }};
    width: ${(a) => {
      if (a.step === 1) {
        return "30px";
      }
    }};
  }

  span {
    color: ${(a) => {
      if (a.step === 3) {
        return "#2FBE34";
      }
      if (a.step === 4) {
        return "#FF922E";
      }
      if (a.step === 5) {
        return "#FF3030";
      }
    }};
    text-decoration: ${(a) => {
      if (a.step >= 3) {
        return "line-through";
      }
    }};
  }
`;
export const Button = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;

  button {
    width: 85px;
    height: 38px;
    border: 0px;
    border-radius: 5px;
    color: white;
    font-family: "Recursive", sans-serif;
  }

  button:first-child {
    background-color: #ff3030;
  }
  button:nth-child(2) {
    background-color: #ff922e;
  }
  button:nth-child(3) {
    background-color: #2fbe34;
  }
`;
