import { Container } from "@mui/material"
import { useMemo } from "react";
import InitialScreen from "./components/InitialScreen";
import { useRecoilValue } from "recoil";
import GameStatusState from "./recoil/gameStatusState";
import GameScreen from "./components/GameScreen";

function App() {

  const gameStatus = useRecoilValue(GameStatusState);

  const screenContent = useMemo(() => {
    if (gameStatus == "initial") return <InitialScreen />
    else if (gameStatus == "started") return <GameScreen />
    return null
  }, [gameStatus])

  return (
    <Container maxWidth="md" sx={{
      position: "relative"
    }}>
      {screenContent}
    </Container>
  )
}

export default App
