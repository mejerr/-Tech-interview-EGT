import React, { memo, useCallback } from 'react';
import classNames from 'classnames';

const Slot = memo((props) => {
    const { number, isDisabled, isSelected, selectSlot, deselectSlot } = props;

    const onClick = useCallback(() => {
        if (isSelected) {
            deselectSlot({ number});
            return;
        }

        selectSlot({ index: number });
    }, [number, isSelected, selectSlot, deselectSlot]);

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

Slot.defaultProps = {
    number: -1,
    isDisabled: false,
    isSelected: false,
    selectSlot: () => {},
    deselectSlot: () => {}
};

export default Slot;
