import GameResult from "./GameResult"

/* eslint-disable react/prop-types */
function GameHistoryItem({gameHistory}) {
  return (
    <GameResult playerGameStatus={gameHistory[0]} yourChoice={gameHistory[1]} opponentChoice={gameHistory[2]} />
  )
}

export default GameHistoryItem