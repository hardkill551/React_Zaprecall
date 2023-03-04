import styled from "styled-components";
import {Card, Button} from "./style"


export default function Answer({ array }) {
  return (
    <Card>
      <p>{array.answer}</p>
      <Button>
        <button>Não lembrei</button>
        <button>Quase não lembrei</button>
        <button>Zap!</button>
      </Button>
    </Card>
  );
}
