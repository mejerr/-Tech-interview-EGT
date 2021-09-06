import { CHANGE_ACTIVE_TAB } from '../constants/tabs';
import{ HOME_TAB } from '../constants/tabs';

import produce from "immer"

const INITIAL_STATE = {
    activeTab: HOME_TAB
};

const reducer = produce((draftState = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case CHANGE_ACTIVE_TAB:
            const { currentTab } = payload;

            draftState.activeTab = currentTab;

            return draftState;
        default:
            return draftState;
    }
});

export default reducer;