import Card from "./style"
import seta from "../../assets/seta_play.png"
import certo from "../../assets/icone_certo.png"
import quase from "../../assets/icone_quase.png"
import erro from "../../assets/icone_erro.png"

export default function Question({array, index, setFlashCard}) {
  return (
    <Card data-test={array.step===0||array.step>=3?"flashcard":""} step={array.step}>
      <p data-test={array.step===0||array.step>=3?"flashcard-text":""}>{`Pergunta ${index+1}`}</p>
      <img data-test={data()} onClick={array.step===0 ? newFlashCard : undefined} src={image()} alt="seta"></img>
    </Card>
  );
    function newFlashCard(){
        array.step = 1
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
}
