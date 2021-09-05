import produce from "immer"
import { SELECT_SLOT, CONSUME_SLOTS, DESELECT_SLOT, CHANGE_BET_AMOUNT } from '../constants/slots';

const INITIAL_STATE = {
    ids: [],
    selectedIds: [],
    areDisabled: false,
    betAmount: 1,
    totalSum: 0
};

const reducer = produce((draftState = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case CONSUME_SLOTS:
            if (!draftState.ids?.length) {
                const slots = [];
                for(let i = 1; i <= 80; i++) {
                    slots.push({ index: i, isSelected: false });
                }

                draftState.ids = slots;
            }

            return draftState;
        case SELECT_SLOT:
            const { index } = payload;

            draftState.ids[index - 1] = {
                ...draftState.ids[index - 1],
                isSelected: true
            }

            draftState.selectedIds = [
                ...draftState.selectedIds,
                index
            ]

            return draftState;
        case DESELECT_SLOT:
            const { number } = payload;

            draftState.ids[number - 1] = {
                ...draftState.ids[number - 1],
                isSelected: false
            }

            draftState.selectedIds =
                draftState.selectedIds.filter(selectedIndex => selectedIndex !== number)

            return draftState;
        case CHANGE_BET_AMOUNT:
            const { amount } = payload;

            draftState.betAmount = Number(amount).toFixed(2);

            return draftState;
        default:
            return draftState;
    }
});

export default reducer;