import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const ScoreState = atom({
    key: "ScoreState",
    default: {
        playerScore: 0,
        opponentScore: 0,
    },
    effects_UNSTABLE: [persistAtom]
})

export default ScoreState