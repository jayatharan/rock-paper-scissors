import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const GameHistoryState = atom({
    key: "GameHistoryState",
    default: [],
    effects_UNSTABLE: [persistAtom]
})

export default GameHistoryState

export const NoOfGamesState = selector({
    key: "NoOfGamesState",
    get: ({get}) => {
        const gameHistories = get(GameHistoryState);

        return gameHistories.length
    }
})