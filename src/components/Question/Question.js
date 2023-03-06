import seta from "../../assets/seta_play.png";
import certo from "../../assets/icone_certo.png";
import quase from "../../assets/icone_quase.png";
import erro from "../../assets/icone_erro.png";
import { Card, Card2, Card3, Button } from "./style";
import virar from "../../assets/seta_virar.png";
import { useState } from "react";

export default function Question({ array, index, ct, setCt }) {
  const [step, setStep] = useState(0);
  if (step === 0 || step >= 3) {
    return (
      <Card data-test={"flashcard"} step={step}>
        <p data-test={"flashcard-text"}>{`Pergunta ${index + 1}`}</p>
        {step === 0 ? (
          <img
            data-test={"play-bnt"}
            onClick={() => setStep(step + 1)}
            src={seta}
            alt="seta"
          ></img>
        ) : null}
        {step === 3 ? (
          <img data-test={"zap-icon"} src={certo} alt="certo"></img>
        ) : null}
        {step === 4 ? (
          <img data-test={"parcial-icon"} src={quase} alt="quase"></img>
        ) : null}
        {step === 5 ? (
          <img data-test={"no-icon"} src={erro} alt="erro"></img>
        ) : null}
      </Card>
    );
  }
  if (step === 1) {
    return (
      <Card2 data-test={"flashcard"} step={step}>
        <p data-test={"flashcard-text"}>{array.question}</p>
        <img
          data-test="turn-btn"
          onClick={() => setStep(step + 1)}
          src={virar}
          alt={"virar"}
        ></img>
      </Card2>
    );
  }
  if (step === 2) {
    return (
      <Card3 data-test={"flashcard"} step={step}>
        <p data-test={"flashcard-text"}>{array.answer}</p>
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
      </Card3>
    );
  }
  function correct() {
    setCt((ct += 1));
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
