/* eslint-disable react/prop-types */
import { Button, Stack} from "@mui/material";

import { useEffect, useMemo, useRef } from "react";
import { useSetRecoilState } from "recoil";
import ScoreState from "../recoil/scoreState";

import GameHistoryState from "../recoil/gameHistory";
import GameResult from "./GameResult";

function Result({ yourChoice, playAgain }) {
  const scroreUpdatedRef = useRef(false)
  const setScore = useSetRecoilState(ScoreState)
  const setGameHistory = useSetRecoilState(GameHistoryState);

  const opponentChoice = useMemo(() => {
    return Math.floor(Math.random() * 3)
  }, [])

  const playerGameStatus = useMemo(() => {
    if (yourChoice === opponentChoice) return "draw";
    else if (
      (yourChoice === 0 && opponentChoice === 2)
      ||
      (yourChoice === 1 && opponentChoice === 0)
      ||
      (yourChoice === 2 && opponentChoice === 1)
    ) return "win"
    return "lose"
  }, [yourChoice, opponentChoice])

  useEffect(() => {
    if (!scroreUpdatedRef.current) {
      setGameHistory(prev => ([[playerGameStatus, yourChoice, opponentChoice], ...prev]))
      if (playerGameStatus === "win") {
        setScore(prev => ({
          playerScore: prev.playerScore + 1,
          opponentScore: prev.opponentScore,
        }))
      } else if (playerGameStatus === "lose") {
        setScore(prev => ({
          playerScore: prev.playerScore,
          opponentScore: prev.opponentScore + 1,
        }))
        
      }
      scroreUpdatedRef.current = true;
    }
  }, [playerGameStatus, setScore])



  return (
    <Stack gap={4}>
      <GameResult playerGameStatus={playerGameStatus} opponentChoice={opponentChoice} yourChoice={yourChoice} />
      <Button size="large" variant="contained" color="error" sx={{
        mx: "auto",
        maxWidth: "200px",
        borderRadius: 8,
        color: "error",
        '@keyframes bounce': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-4px)',
          },
        },
        ':hover': {
          animation: 'bounce 0.5s infinite',
        },
      }} onClick={playAgain} >
        Play Again
      </Button>
    </Stack>
  )
}

export default Result