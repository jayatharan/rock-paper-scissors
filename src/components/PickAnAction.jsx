/* eslint-disable react/prop-types */
import { Grid, Stack, Typography } from "@mui/material";
import rockHand from "../assets/rock-hand.png";

import flipedPaperHand from "../assets/fliped-paper-hand.png";
import flipedScissorHand from "../assets/fliped-scissor-hand.png";
import flipedRockHand from "../assets/fliped-rock-hand.png";

import { motion } from 'framer-motion';

const PickAnAction = ({pickAnAction}) => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography textAlign={"center"} variant="h4">Pick an Action</Typography>
                <Stack gap={4}>
                    <motion.img
                        src={flipedRockHand}
                        width="100%"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        whileHover={{
                            scale: 1.2,
                            transition: { type: 'spring', stiffness: 300, damping: 20 },
                        }}
                        onClick={()=>pickAnAction(0)}
                        style={{
                            cursor: "pointer"
                        }}
                    />
                    <motion.img
                        src={flipedPaperHand}
                        width="100%"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        whileHover={{
                            scale: 1.2,
                            transition: { type: 'spring', stiffness: 300, damping: 20 },
                        }}
                        onClick={()=>pickAnAction(1)}
                        style={{
                            cursor: "pointer"
                        }}
                    />
                    <motion.img
                        src={flipedScissorHand}
                        width="100%"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        whileHover={{
                            scale: 1.2,
                            transition: { type: 'spring', stiffness: 300, damping: 20 },
                        }}
                        onClick={()=>pickAnAction(2)}
                        style={{
                            cursor: "pointer"
                        }}
                    />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Typography textAlign={"center"} variant="h4">Opponent is Waiting</Typography>
                <Stack gap={4}>
                    <motion.img
                        src={rockHand}
                        width="100%"
                        initial={{ scale: 1.2, transformOrigin: "right center", }}
                        animate={{ rotate: [-5, 5, -5] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        style={{ 
                            cursor: "not-allowed"
                        }}
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default PickAnAction