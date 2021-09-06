import classNames from 'classnames';
import React, { memo, useCallback } from 'react';
import FinalCountdownButtons from '../games/final-countdown-game/final-countdown-buttons/final-countdown-buttons';

const DrawCountsField = memo((props) => {
    const { className, drawCounts, changeDrawCounts, addDrawCount, removeDrawCount} = props;

    const onChange = useCallback((event) => {
        changeDrawCounts({ counts: event.target.value})
    }, [changeDrawCounts]);

    return (
        <div className={classNames('draw-counts-container', 'field-container', {
            [className] : className
            })}
        >
            <div className="title">{"Draw counts"}</div>
            <FinalCountdownButtons addOneAmout={addDrawCount} removeOneAmount={removeDrawCount}>
                <input className="field-number" value={drawCounts} onChange={onChange}></input>
            </FinalCountdownButtons>
        </div>
    );
});

DrawCountsField.defaultProps = {
    className: '',
    amount: 1,
    changeDrawCounts: () => {},
    addDrawCount: () => {},
    removeDrawCount: () => {}
};

export default DrawCountsField;
