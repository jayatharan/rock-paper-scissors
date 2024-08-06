import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"
import { useSetRecoilState } from "recoil"
import ScoreState from "../recoil/scoreState"
import GameStatusState from "../recoil/gameStatusState";

/* eslint-disable react/prop-types */
const QuitGame = ({ open, cancel }) => {

    const setScore = useSetRecoilState(ScoreState);
    const setGameStatus = useSetRecoilState(GameStatusState);

    const quitGame = () => {
        setScore({
            playerScore: 0,
            opponentScore: 0,
        })
        setGameStatus("initial")
    }

    return (
        <Dialog open={open} maxWidth={"md"} fullWidth>
            <DialogTitle>
                <Typography variant="h4">
                    Quit Game
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Typography variant="h6">
                    Are you sure you want to quit this game?
                </Typography>
                <Typography variant="body2">
                    Your current score will be reset when you quit the game.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="error" onClick={quitGame}>Quit</Button>
                <Button variant="outlined" color="primary" onClick={cancel}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default QuitGame