import React, { memo, useCallback, useEffect } from 'react';
import Slot from '../common/slot'

const FinalCountdown = memo((props) => {
    const { slots, selectSlot, consumeSlots } = props;

    const renderSlots = useCallback(({ index, isSelected }) => {
        return (
            <Slot
                key={index}
                selectSlot={selectSlot}
                number={index}
                isSelected={isSelected}
            />
        )
    }, [selectSlot]);

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
    slots: [],
    selectSlot: () => {},
    consumeSlots: () => {}
}

export default FinalCountdown;
