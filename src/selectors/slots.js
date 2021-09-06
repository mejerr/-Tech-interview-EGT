import { createSelector } from 'reselect'
import { NAX_SLOTS_CLICKED } from '../constants/final-countdown'

export const areSlotsDisabledSelector = createSelector(
    (state) => state.finalCountdown.selectedIds.length,
    (selectedIdsLength) => selectedIdsLength >= NAX_SLOTS_CLICKED
);