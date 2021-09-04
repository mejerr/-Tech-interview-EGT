import produce from "immer"
import { SELECT_SLOT, CONSUME_SLOTS } from '../constants/slots';

const INITIAL_STATE = {
    slotsFinalCountdown: {
        ids: []
    }
};

const reducer = produce((draftState = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case CONSUME_SLOTS:
            if (!draftState.slotsFinalCountdown.ids.length) {
                const slots = [];
                for(let i = 1; i <= 80; i++) {
                    slots.push({ index: i - 1, isSelected: false });
                }
            
                draftState.ids = slots;
            }


            return draftState;
        case SELECT_SLOT:
            const { index } = payload;

            draftState.ids[index] = {
                ...draftState.ids[index],
                isSelected: true
            }

            return draftState;
        default:
            return draftState;
    }
});

export default reducer;