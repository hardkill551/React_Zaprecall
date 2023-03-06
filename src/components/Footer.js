import styled from "styled-components";
import certo from "../assets/icone_certo.png";
import quase from "../assets/icone_quase.png";
import erro from "../assets/icone_erro.png";
import party from "../assets/party.png";
import sad from "../assets/sad.png";

export default function Footer({ flashCard, ct, trade, icons }) {
  return (
    <Bottom data-test="footer" trade={trade} icons={icons.length}>
      {icons.length === 8 ? (
        <div data-test="finish-text">
          <Congratulations>
            <img
              src={icons.includes(5) ? sad : party}
              alt={icons.includes(5) ? sad : party}
            />
            <span>{icons.includes(5) ? "Putz..." : "Parabéns"}</span>
          </Congratulations>
          <p>
            {icons.includes(5)
              ? "Ainda faltam alguns... Mas não desanime!"
              : "Você não esqueceu de nenhum flashcard!"}
          </p>
        </div>
      ) : null}

      <p>
        {ct}/{flashCard.length} CONCLUÍDOS
      </p>
      <div>
        {icons.map((number, i) => (
          <img
            key={i}
            data-test={data(number)}
            src={icon(number)}
            alt={icon(number)}
          />
        ))}
      </div>
    </Bottom>
  );

  function data(n) {
    if (n === 3) {
      return "zap-icon";
    }
    if (n === 4) {
      return "partial-icon";
    }
    return "no-icon";
  }
  function icon(n) {
    if (n === 3) {
      return certo;
    }
    if (n === 4) {
      return quase;
    }
    return erro;
  }
}

const Congratulations = styled.div`
  height: 22px;
  margin-bottom: 10px;
  display:flex;
  justify-content:center;
  align-items:center;
  img{
    width:23px;
    height:23px;
  }
  span {
    font-weight: bold;
  }
`;
const Bottom = styled.div`
  flex-direction: column;
  position: fixed;
  background-color: white;
  height: ${(a) => (a.icons===8 ? "170px" : "70px")};
  width: 100vw;
  bottom: 0px;
  display: ${(a) => (a.trade === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  font-size: 18px;
  z-index: 1;
  text-align: center;
  p {
    margin-top: 10px;
    width: 200px;
  }
  img {
    margin: 4px;
  }
`;
