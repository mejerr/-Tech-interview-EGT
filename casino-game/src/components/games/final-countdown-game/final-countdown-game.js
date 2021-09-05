import React, { memo, useCallback, useEffect } from 'react';
import Slot from '../../common/slot'
import FinalCountdownFooter from '../../../containers/games/final-countdown-game/final-countdown-footer';
import Timer from '../../../components/common/timer';
import Comments from '../../../containers/games/final-countdown-game/final-countdown-comments';

const FinalCountdown = memo((props) => {
    const { areDisabled, slots, comments, selectSlot, consumeSlots, deselectSlot, showComments, initComments } = props;

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
            initComments();
        }

    }, [consumeSlots, slots, initComments])

    return (
        <div className="final-countdown-container content">
            <div className="final-countdown-wrapper">
                <div className="slots-container">
                    {slots.map(renderSlots)}
                </div>
                <Timer onFinish={showComments}/>
                <FinalCountdownFooter />
                {comments.length ? <Comments /> : null}
            </div>
        </div>
    );
});

FinalCountdown.defaultProps = {
    areDisabled: false,
    slots: [],
    comments: [],
    selectSlot: () => {},
    deselectSlot: () => {},
    consumeSlots: () => {},
    showComments: () => {},
    initComments: () => {}
}

export default FinalCountdown;
