import { Box, Button, Stack, Typography } from "@mui/material"
import playIcon from "../assets/play-icon.png"
import { motion } from 'framer-motion';
import { useSetRecoilState } from "recoil";
import GameStatusState from "../recoil/gameStatusState";

const InitialScreen = () => {
    const setGameStatus = useSetRecoilState(GameStatusState);

    const startGame = () => setGameStatus("started")
    
    return (
        <Box sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Box>
                <Typography variant="h1" fontWeight={900} textAlign={"center"}>Rock Paper Scissors</Typography>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Stack spacing={6}>
                        <motion.img
                            src={playIcon}
                            initial={{ scale: 1, rotate: 0 }}
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "mirror"
                            }}
                            style={{
                                width: "200px",
                                height: "200px",
                                zIndex: 10,
                                cursor: "pointer"
                            }}
                            onClick={startGame}
                        />
                        <Button size="large" variant="contained" color="error" sx={{
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
                        }} onClick={startGame} >
                            Play Now
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default InitialScreen