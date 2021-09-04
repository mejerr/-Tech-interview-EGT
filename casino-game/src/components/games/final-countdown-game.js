import React, { memo, useCallback, useEffect } from 'react';
import Slot from '../common/slot'

const FinalCountdown = memo((props) => {
    const { slots, selectSlot, consumeSlots, shouldDisableSlots, areDisabled } = props;

    const renderSlots = useCallback(({ index, isSelected }) => (
        <Slot
            key={index}
            selectSlot={selectSlot}
            number={index}
            isSelected={isSelected}
            isDisabled={areDisabled}
        />
    ), [selectSlot, areDisabled]);

    useEffect(() => {
        if (!slots.length) {
            consumeSlots();
        }

        shouldDisableSlots();
    }, [consumeSlots, slots, shouldDisableSlots])

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
    consumeSlots: () => {},
    shouldDisableSlots: () => {}
}

export default FinalCountdown;
