import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const GameStatusState = atom({
    key: "GameStatusState",
    default: "initial",
    effects_UNSTABLE: [persistAtom]
})

export default GameStatusState;