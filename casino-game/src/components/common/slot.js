import React, { memo, useCallback } from 'react';
import classNames from 'classnames';

const Slot = memo((props) => {
    const { number, isDisabled, isSelected, selectSlot } = props;

    const onClick = useCallback(() => {
        selectSlot({ index: number });
    }, [selectSlot, number]);

    return (
        <div className={classNames('slot-container', {
            'selected': isSelected,
            'disabled': isDisabled
        })}
            onClick={onClick}
        >
            <div className="slot-number">{number}</div>
        </div>
    );
});

Slot.exportDefault = {
    number: 0,
    isDisabled: false,
    isSelected: false,
    selectSlot: () => {}
};

export default Slot;
