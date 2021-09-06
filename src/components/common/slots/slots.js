

import React, { memo, useCallback } from 'react';
import Slot from './slot';

const Slots = memo((props) => {
    const { areDisabled, slots, selectSlot, deselectSlot } = props;

    const renderSlots = useCallback(({ index, isSelected }) => (
        <Slot
            key={index}
            selectSlot={selectSlot}
            deselectSlot={deselectSlot}
            number={index}
            isSelected={isSelected}
            isDisabled={areDisabled}
        />
    ), [selectSlot, areDisabled, deselectSlot]);

    return (
        <div className="slots-container">
            {slots.map(renderSlots)}
        </div>
    );
});

Slots.defaultProps = {
    areDisabled: false,
    slots: [],
    selectSlot: () => {},
    deselectSlot: () => {}
};

export default Slots;
