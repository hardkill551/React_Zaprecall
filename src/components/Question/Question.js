import seta from "../../assets/seta_play.png";
import certo from "../../assets/icone_certo.png";
import quase from "../../assets/icone_quase.png";
import erro from "../../assets/icone_erro.png";
import { Card, Button } from "./style";
import virar from "../../assets/seta_virar.png";

export default function Question({ array, index, setFlashCard, ct, setCt }) {
  return (
    <Card data-test={"flashcard"} step={array.step}>
      <span data-test={"flashcard-text"}>{text()}</span>
      {array.step !== 2 ? (
        <img
          data-test={data()}
          onClick={array.step < 3 ? newFlashCard : undefined}
          src={image()}
          alt={image()}
        ></img>
      ) : (
        <Button>
          <button data-test="no-btn" onClick={wrong}>
            Não lembrei
          </button>
          <button data-test="partial-btn" onClick={moreOrLess}>
            Quase não lembrei
          </button>
          <button data-test="zap-btn" onClick={correct}>
            Zap!
          </button>
        </Button>
      )}
    </Card>
  );

  function text() {
    if (array.step === 0 || array.step > 2) return `Pergunta ${index + 1}`;
    if (array.step === 1) return array.question;
    if (array.step === 2) return array.answer;
  }

  function newFlashCard() {
    array.step += 1;
    setFlashCard((prevState) => {
      prevState[index] = array;
      return [...prevState];
    });
  }
  function data() {
    if (array.step === 0) {
      return "play-btn";
    }
    if (array.step === 1) {
      return "turn-btn";
    }
    if (array.step === 3) {
      return "zap-icon";
    }
    if (array.step === 4) {
      return "partial-icon";
    }
    if (array.step === 5) {
      return "no-icon";
    }
  }
  function image() {
    if (array.step === 0) {
      return seta;
    }
    if (array.step === 1) {
      return virar;
    }
    if (array.step === 3) {
      return certo;
    }
    if (array.step === 4) {
      return quase;
    }
    if (array.step === 5) {
      return erro;
    }
  }
  function correct() {
    array.step = 3;
    setCt((ct += 1));
    setFlashCard((prevState) => {
      prevState[index] = array;
      return [...prevState];
    });
  }
  function moreOrLess() {
    array.step = 4;
    setCt((ct += 1));
    setFlashCard((prevState) => {
      prevState[index] = array;
      return [...prevState];
    });
  }
  function wrong() {
    array.step = 5;
    setCt((ct += 1));
    setFlashCard((prevState) => {
      prevState[index] = array;
      return [...prevState];
    });
  }
}
