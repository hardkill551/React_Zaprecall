import {Card, Button} from "./style"


export default function Answer({ array, index, setFlashCard, ct, setCt }) {
  return (
    <Card step={array.step}>
      <p data-test={array.step===2?"flashcard-text":""}>{array.answer}</p>
      <Button>
        <button data-test="no-btn"onClick={wrong}>Não lembrei</button>
        <button data-test="partial-btn" onClick={moreOrLess}>Quase não lembrei</button>
        <button data-test="zap-btn" onClick={correct}>Zap!</button>
      </Button>
    </Card>
  );

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
