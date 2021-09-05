import React, { memo, useCallback } from 'react';

const TotalField = memo((props) => {
    const { number, } = props;

    const onClick = useCallback(() => {

    }, []);

    return (
        <div className="total-field-container" onClick={onClick}>
            <div className="total-field-number">{number}</div>
        </div>
    );
});

TotalField.defaultProps = {
    number: 0,
};

export default TotalField;
