import classNames from 'classnames';
import React, { memo, useCallback } from 'react';

const DrawCountsField = memo((props) => {
    const { className, drawCounts, changeDrawCounts } = props;

    const onChange = useCallback((event) => {
        changeDrawCounts({ counts: event.target.value})
    }, [changeDrawCounts]);

    return (
        <div className={classNames('draw-counts-container', 'field-container', {
            [className] : className
            })}
        >
            <div className="title">{"Draw counts"}</div>
            <input className="field-number" value={drawCounts} onChange={onChange}></input>
        </div>
    );
});

DrawCountsField.defaultProps = {
    className: '',
    amount: 1,
    changeDrawCounts: () => {}
};

export default DrawCountsField;
