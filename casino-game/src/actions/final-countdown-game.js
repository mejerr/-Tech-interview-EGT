import {
    SELECT_SLOT,
    CONSUME_SLOTS,
    DESELECT_SLOT,
    CHANGE_BET_AMOUNT,
    CHANGE_DRAW_COUNTS,
    SHOW_COMMENTS,
    CONSUME_COMMENTS,
    INIT_COMMENTS
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

