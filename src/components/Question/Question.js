import seta from "../../assets/seta_play.png";
import certo from "../../assets/icone_certo.png";
import quase from "../../assets/icone_quase.png";
import erro from "../../assets/icone_erro.png";
import { Card, Button } from "./style";
import virar from "../../assets/seta_virar.png";
import { useState } from "react";


export default function Question({ array, index, ct, setCt }) {
  const [step, setStep] = useState(0)
  
  return (
    <Card data-test={"flashcard"} step={step}>
      <span data-test={"flashcard-text"}>{text()}</span>
      {step !== 2 ? (
        <img
          data-test={data()}
          onClick={step < 3 ? () => newFlashCard() : undefined}
          src={image()}
          alt={image()}
        ></img>
      ) : (
        <Button>
          <button data-test="no-btn" onClick={() => wrong()}>
            Não lembrei
          </button>
          <button data-test="partial-btn" onClick={() => moreOrLess()}>
            Quase não lembrei
          </button>
          <button data-test="zap-btn" onClick={() => correct()}>
            Zap!
          </button>
        </Button>
      )}
    </Card>
  );

  function text() {
    if (step === 0 || step > 2) return `Pergunta ${index + 1}`;
    if (step === 1) return array.question;
    if (step === 2) return array.answer;
  }

  function newFlashCard() {
    setStep(step+1);
  }
  function data() {
    if (step === 0) {
      return "play-btn";
    }
    if (step === 1) {
      return "turn-btn";
    }
    if (step === 3) {
      return "zap-icon";
    }
    if (step === 4) {
      return "partial-icon";
    }
    if (step === 5) {
      return "no-icon";
    }
  }
  function image() {
    if (step === 0) {
      return seta;
    }
    if (step === 1) {
      return virar;
    }
    if (step === 3) {
      return certo;
    }
    if (step === 4) {
      return quase;
    }
    if (step === 5) {
      return erro;
    }
  }
  function correct() {
    setCt(ct += 1);
    setStep(3);
  }
  function moreOrLess() {
    setCt((ct += 1));
    setStep(4);
  }
  function wrong() {
    setCt((ct += 1));
    setStep(5);
  }
}
