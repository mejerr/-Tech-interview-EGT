import { SELECT_SLOT, CONSUME_SLOTS, SHOULD_DISABLE_SLOTS } from '../constants/slots';


export const consumeSlots = () => ({
    type: CONSUME_SLOTS
});

export const selectSlot = ({ index }) => ({
    type: SELECT_SLOT,
    payload: { index }
});

export const shouldDisableSlots = () => ({
    type: SHOULD_DISABLE_SLOTS
});
