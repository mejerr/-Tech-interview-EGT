import { createSelector } from 'reselect'
import { NAX_SLOTS_CLICKED } from '../constants/slots'

export const areSlotsDisabledSelector = createSelector(
    (state) => state.slots.slotsFinalCountdown.selectedIds.length,
    (selectedIdsLength) => selectedIdsLength >= NAX_SLOTS_CLICKED
  )