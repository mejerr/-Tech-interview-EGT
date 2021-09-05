import produce from "immer"
import { SELECT_SLOT, CONSUME_SLOTS } from '../constants/slots';

const INITIAL_STATE = {
    slotsFinalCountdown: {
        ids: [],
        selectedIds: [],
        areDisabled: false
    }
};

const reducer = produce((draftState = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case CONSUME_SLOTS:
            if (!draftState.ids?.length) {
                const slots = [];
                for(let i = 1; i <= 80; i++) {
                    slots.push({ index: i, isSelected: false });
                }
                console.log(slots)
                draftState.slotsFinalCountdown.ids = slots;
            }


            return draftState;

        case SELECT_SLOT:
            const { index } = payload;

            draftState.slotsFinalCountdown.ids[index] = {
                ...draftState.slotsFinalCountdown.ids[index],
                isSelected: true
            }

            draftState.slotsFinalCountdown.selectedIds = [
                ...draftState.slotsFinalCountdown.selectedIds,
                index
            ]

            return draftState;
        default:
            return draftState;
    }
});

export default reducer;