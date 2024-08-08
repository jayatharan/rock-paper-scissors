import { Box, Grid, Typography } from "@mui/material"
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";

import paperHand from "../assets/paper-hand.png";
import rockHand from "../assets/rock-hand.png";
import scissorHand from "../assets/scissor-hand.png";

import flipedPaperHand from "../assets/fliped-paper-hand.png";
import flipedScissorHand from "../assets/fliped-scissor-hand.png";
import flipedRockHand from "../assets/fliped-rock-hand.png";

const choises = [
  {
    name: "Rock",
    imageSrc: rockHand,
    flipedImageSrc: flipedRockHand
  },
  {
    name: "Paper",
    imageSrc: paperHand,
    flipedImageSrc: flipedPaperHand
  },
  {
    name: "Scissors",
    imageSrc: scissorHand,
    flipedImageSrc: flipedScissorHand
  },
]

const results = {
  "draw": {
    title: "Game Draw",
    color: "#f57c00"
  },
  "win": {
    title: "You Win",
    color: "#388e3c"
  },
  "lose": {
    title: "You Lose",
    color: "#d32f2f"
  }
}

const GameResult = ({
  playerGameStatus,
  yourChoice,
  opponentChoice
}) => {
  const playerAnimation = useAnimation()
  const opponentAnimation = useAnimation()

  useEffect(()=> {
    if(playerGameStatus === "win"){
      playerAnimation.start({
        rotate: [0, -50, 0, 0],
        x: [0, "40%", "40%", 0]
      })
      opponentAnimation.start({
        rotate: [0, 0, -20, 0],
        x: [0, "-40%", "-40%", 0]
      })
    }else if(playerGameStatus === "lose") {
      playerAnimation.start({
        rotate: [0, 0, 20, 0],
        x: [0, "40%", "40%", 0]
      })
      opponentAnimation.start({
        rotate: [0, 50, 0, 0],
        x: [0, "-40%", "-40%", 0]
      })
    } else {
      opponentAnimation.start({
        x: [0, "-40%", "-40%", 0]
      })
      playerAnimation.start({
        x: [0, "40%", "40%", 0]
      })
    }
  }, [opponentAnimation, playerAnimation, playerGameStatus])

  return (
    <Box sx={{
      position: "relative"
    }}>
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "150px",
        height: "150px",
      }}>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: results[playerGameStatus].color,
            boxShadow: `0 0 20px 15px ${results[playerGameStatus].color}`
          }}>
          <Typography textAlign={"center"} variant="h4" color={"white"}>{results[playerGameStatus].title}</Typography>
        </motion.div>
      </Box>
      <Grid container>
        <Grid item xs={6}>
          <Typography textAlign={"center"} variant="h4">You Picked</Typography>
          <motion.img
            src={choises[yourChoice].flipedImageSrc}
            width="100%"
            initial={{transformOrigin: "left center"}}
            animate={playerAnimation}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography textAlign={"center"} variant="h4">Opponent Picked</Typography>
          <motion.img
            src={choises[opponentChoice].imageSrc}
            width="100%"
            initial={{ transformOrigin: "right center", }}
            animate={opponentAnimation}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default GameResult