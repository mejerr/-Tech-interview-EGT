import { createSelector } from 'reselect'

export const maxSlotsCountSelector = createSelector(
    (state, { selectedIds }) => selectedIds.length,
    (selectedIdsLength) => {
        return  selectedIdsLength > 12
    }
  )