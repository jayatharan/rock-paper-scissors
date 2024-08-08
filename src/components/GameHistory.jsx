import { useRecoilValue } from "recoil"
import GameHistoryState, { NoOfGamesState } from "../recoil/gameHistory"
import { Box, Grid, Stack, Typography } from "@mui/material"
import GameHistoryItem from "./GameHistoryItem"

const GameHistory = () => {
    const gameHistories = useRecoilValue(GameHistoryState)
    const noOfGames = useRecoilValue(NoOfGamesState);

    return (
        <Grid container rowSpacing={16}>
            {noOfGames === 0 && (
                <Grid xs={12} item>
                    <Box height={"100px"}>
                        <Typography variant="h3" textAlign={"center"}>No games you played.</Typography>
                    </Box>
                </Grid>
            )}
            {gameHistories.map((gameHistory, idx) => (
                <Grid xs={12} item key={idx}>
                    <Stack>
                        <Typography variant="h3" textAlign={"center"}>{`Game ${noOfGames - idx}`}</Typography>
                        <GameHistoryItem gameHistory={gameHistory} />
                    </Stack>
                </Grid>
            ))}
        </Grid>
    )
}

export default GameHistory