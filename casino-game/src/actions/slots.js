import { SELECT_SLOT, CONSUME_SLOTS } from '../constants/slots';


export const consumeSlots = () => ({
    type: CONSUME_SLOTS
});

export const selectSlot = ({ index }) => ({
    type: SELECT_SLOT,
    payload: { index }
});

