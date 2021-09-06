
import produce from "immer"
import { GAMES, SET_CURRENT_GAME } from '../constants/games';

const INITIAL_STATE = {
    currentGame: {}
};

const reducer = produce((draftState = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_CURRENT_GAME:
            const { currentGame = GAMES[1] } = payload;

            draftState.currentGame = currentGame;

            return draftState;
        default:
            return draftState;
    }
});

export default reducer;