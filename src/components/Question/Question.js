import seta from "../../assets/seta_play.png"
import certo from "../../assets/icone_certo.png"
import quase from "../../assets/icone_quase.png"
import erro from "../../assets/icone_erro.png"
import {Card, Card2, Card3, Button} from "./style"
import virar from "../../assets/seta_virar.png"

export default function Question({array, index, setFlashCard, ct, setCt}) {
  if(array.step===0||array.step>=3){
    return (
        <Card data-test={"flashcard"} step={array.step}>
            <p data-test={"flashcard-text"}>{`Pergunta ${index+1}`}</p>
            <img data-test={data()} onClick={array.step===0 ? newFlashCard : undefined} src={image()} alt="seta"></img>
        </Card>)
  }
  if(array.step===1){
    return(
      <Card2 data-test={"flashcard"} step={array.step}>
          <p data-test={"flashcard-text"}>{array.question}</p>
          <img data-test="turn-btn" onClick={newFlashCard} src={virar} alt={"virar"}></img>
      </Card2>
  )
  }
  if(array.step===2){
    return (
      <Card3 data-test={"flashcard"}step={array.step}>
        <p data-test={"flashcard-text"}>{array.answer}</p>
        <Button>
          <button data-test="no-btn"onClick={wrong}>Não lembrei</button>
          <button data-test="partial-btn" onClick={moreOrLess}>Quase não lembrei</button>
          <button data-test="zap-btn" onClick={correct}>Zap!</button>
        </Button>
      </Card3>
    );
  }

    function newFlashCard(){
        array.step += 1
        setFlashCard(prevState => {
            prevState[index]=array
            return [...prevState]
        })
    }
    function data(){
      if(array.step===0){
        return "play-btn"
      }
      if(array.step===3){
        return "zap-icon"
      }
      if(array.step===4){
        return "partial-icon"
      }
      if(array.step===5){
        return "no-icon"
      }
    }
    function image(){
      if(array.step===0){
        return seta
      }
      if(array.step===3){
        return certo
      }
      if(array.step===4){
        return quase
      }
      if(array.step===5){
        return erro
      }
    }
    function correct(){
      array.step = 3
      setCt(ct+=1)
      setFlashCard(prevState => {
          prevState[index]=array
          return [...prevState]
      })
    }
    function moreOrLess(){
      array.step = 4
      setCt(ct+=1)
      setFlashCard(prevState => {
          prevState[index]=array
          return [...prevState]
      })
    }
    function wrong(){
      array.step = 5
      setCt(ct+=1)
      setFlashCard(prevState => {
          prevState[index]=array
          return [...prevState]
      })
    }
}
