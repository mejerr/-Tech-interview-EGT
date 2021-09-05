import React, { memo, useCallback, useEffect } from 'react';
import Slot from '../common/slot'

const FinalCountdown = memo((props) => {
    const { areDisabled, slots, selectSlot, consumeSlots, deselectSlot } = props;

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

    useEffect(() => {
        if (!slots.length) {
            consumeSlots();
        }

    }, [consumeSlots, slots])

    return (
        <div className="final-countdown-container content">
            <div className="final-countdown-wrapper">
                <div className="slots-container">
                    {slots.map(renderSlots)}
                </div>
                <div className="timer-field"></div>
                <div className="total-field"></div>
                <div className="draw-counts-field"></div>
                <div className="bet-sum-field"></div>
            </div>
        </div>
    );
});

FinalCountdown.defaultProps = {
    areDisabled: false,
    slots: [],
    selectSlot: () => {},
    deselectSlot: () => {},
    consumeSlots: () => {}
}

export default FinalCountdown;
