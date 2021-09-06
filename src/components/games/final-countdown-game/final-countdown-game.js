import React, { memo, useEffect } from 'react';
import FinalCountdownFooter from '../../../containers/games/final-countdown-game/final-countdown-footer';
import Timer from '../../../components/common/timer';
import Comments from '../../../containers/games/final-countdown-game/final-countdown-comments';
import Slots from '../../common/slots/slots';

const FinalCountdown = memo((props) => {
    const { areDisabled, slots, comments, selectSlot, consumeSlots, deselectSlot, showComments, initComments } = props;

    useEffect(() => {
        if (!slots.length) {
            consumeSlots();
            initComments();
        }

    }, [consumeSlots, slots, initComments])

    return (
        <div className="final-countdown-container content">
            <div className="final-countdown-wrapper">
                <Slots
                    slots={slots}
                    areDisabled = {areDisabled}
                    selectSlot={selectSlot}
                    deselectSlot={deselectSlot}
                />
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
