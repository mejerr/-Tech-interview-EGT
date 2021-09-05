import React, { memo, useCallback } from 'react';
import classNames from 'classnames';

const TotalField = memo((props) => {
    const { className, number } = props;

    return (
        <div className={classNames('total-field-container', 'field-container', {
            [className] : className
            })}
        >
            <div className="title">{"Total amount"}</div>
            <div className="field-number">{number}</div>
        </div>
    );
});

TotalField.defaultProps = {
    className: '',
    number: 0
};

export default TotalField;
