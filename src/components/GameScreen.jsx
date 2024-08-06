import { Box, Fab, Stack, Tooltip, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import ScoreState from "../recoil/scoreState";
import PickAnAction from "./PickAnAction";
import { useCallback, useState } from "react";
import Result from "./Result";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import QuitGame from "./QuitGame";

const GameScreen = () => {
    const score = useRecoilValue(ScoreState);
    const [yourChoice, setYourChoice] = useState(null)
    const [quitGame, setQuitGame] = useState(false)

    const pickAnAction = (choice) => {
        setYourChoice(choice)
    }

    const playAgain = useCallback(()=> {
        setYourChoice(null)
    }, [setYourChoice])

    const openQuitGameConfirmation = () => {
        setQuitGame(true);
    }

    const cancelQuitGame = () => {
        setQuitGame(false)
    }

    return (
        <Stack sx={{ py: 2 }}>
            <QuitGame open={quitGame} cancel={cancelQuitGame} />
            <Box sx={{ border: "1px solid black", borderRadius: 1, p: 1 }}>
                <Typography variant="h3" textAlign={"center"}>Rock Paper Scissors</Typography>
                <Stack display={"flex"} direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="h4" textAlign={"center"}>{`Your Score: ${score.playerScore}`}</Typography>
                    <Typography variant="h4" textAlign={"center"}>{`Opponent Score: ${score.opponentScore}`}</Typography>
                </Stack>
            </Box>
            <Box sx={{
                pt: 3
            }}>
                {yourChoice != null ? <Result yourChoice={yourChoice} playAgain={playAgain} /> : <PickAnAction pickAnAction={pickAnAction} />}
            </Box>
            <Fab color="error" aria-label="exit" sx={{
                position: "absolute",
                right: 2,
                bottom: 2
            }}>
                <Tooltip title={
                    <Box sx={{
                        background: "#d32f2f",
                        p: 1,
                        color: "white",
                        borderRadius: 1
                    }}>
                        Quit Game
                    </Box>
                } arrow onClick={openQuitGameConfirmation} >
                    <ExitToAppIcon />
                </Tooltip>
            </Fab>
        </Stack>
    );
}

export default GameScreen;
