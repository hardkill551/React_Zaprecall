import {Card, Button} from "./style"


export default function Answer({ array, index, setFlashCard }) {
  return (
    <Card step={array.step}>
      <p>{array.answer}</p>
      <Button>
        <button onClick={wrong}>Não lembrei</button>
        <button onClick={moreOrLess}>Quase não lembrei</button>
        <button onClick={correct}>Zap!</button>
      </Button>
    </Card>
  );

function correct(){
  array.step = 3
  setFlashCard(prevState => {
      prevState[index]=array
      return [...prevState]
  })
}
function moreOrLess(){
  array.step = 4
  setFlashCard(prevState => {
      prevState[index]=array
      return [...prevState]
  })
}
function wrong(){
  array.step = 5
  setFlashCard(prevState => {
      prevState[index]=array
      return [...prevState]
  })
}

}
