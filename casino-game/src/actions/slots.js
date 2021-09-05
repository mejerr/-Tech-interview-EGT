import { SELECT_SLOT, CONSUME_SLOTS, DESELECT_SLOT } from '../constants/slots';


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

