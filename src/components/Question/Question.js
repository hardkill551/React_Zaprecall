import seta from "../../assets/seta_play.png";
import certo from "../../assets/icone_certo.png";
import quase from "../../assets/icone_quase.png";
import erro from "../../assets/icone_erro.png";
import { Card, Button } from "./style";
import virar from "../../assets/seta_virar.png";
import { useState } from "react";


export default function Question({ array, index, ct, setCt, setIcons }) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState("play-btn")
  const [text, setText] = useState(`Pergunta ${index + 1}`)
  return (
    <Card data-test={"flashcard"} step={step}>
      <span data-test={"flashcard-text"}>{text}</span>
      {step !== 2 ? (
        <img
          data-test={data}
          onClick={step < 3 ? () => {setStep(step+1); newData(step+1)}: undefined}
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

  function newData(step) {
    if (step === 1) {
      setData("turn-btn")
      setText(array.question)
    }
    if (step > 2){
      setText(array.question)
    }
    if (step === 2) {
      setText(array.answer)
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
    setData("zap-icon");
    setIcons(previous => [...previous, 3])
  }
  function moreOrLess() {
    setCt((ct += 1));
    setStep(4);
    setData("partial-icon");
    setIcons(previous => [...previous, 4])
  }
  function wrong() {
    setCt((ct += 1));
    setStep(5);
    setData("no-icon");
    setIcons(previous => [...previous, 5])
  }
}