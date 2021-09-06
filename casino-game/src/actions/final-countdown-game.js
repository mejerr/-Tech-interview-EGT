import {
    SELECT_SLOT,
    CONSUME_SLOTS,
    DESELECT_SLOT,
    CHANGE_BET_AMOUNT,
    CHANGE_DRAW_COUNTS,
    SHOW_COMMENTS,
    CONSUME_COMMENTS,
    INIT_COMMENTS,
    ADD_DRAW_COUNT,
    REMOVE_DRAW_COUNT,
    ADD_BET_AMOUNT,
    REMOVE_BET_AMOUNT
} from '../constants/final-countdown';


export const consumeSlots = () => ({
    type: CONSUME_SLOTS
});

export const selectSlot = ({ index }) => ({
    type: SELECT_SLOT,
    payload: { index }
});

export const deselectSlot = ({ number }) => ({
    type: DESELECT_SLOT,
    payload: { number }
});

export const changeBetAmount = ({ amount }) => ({
    type: CHANGE_BET_AMOUNT,
    payload: { amount }
});

export const changeDrawCounts = ({ counts }) => ({
    type: CHANGE_DRAW_COUNTS,
    payload: { counts }
});

export const showComments = () => ({
    type: SHOW_COMMENTS
});

export const consumeComments = ({ comments }) => ({
    type: CONSUME_COMMENTS,
    payload: { comments }
});

export const initComments = () => ({
    type: INIT_COMMENTS
});

export const addBetAmount = () => ({
    type: ADD_BET_AMOUNT
});

export const removeBetAmount = () => ({
    type: REMOVE_BET_AMOUNT
});

export const addDrawCount = () => ({
    type: ADD_DRAW_COUNT
});

export const removeDrawCount = () => ({
    type: REMOVE_DRAW_COUNT
});

