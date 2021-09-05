import { PLAY_GAME, SET_CURRENT_GAME } from '../constants/games';

export const playGame = () => ({
    type: PLAY_GAME
});

export const setCurrentGame = ({ currentGame } = {}) => ({
    type: SET_CURRENT_GAME,
    payload: { currentGame }
});