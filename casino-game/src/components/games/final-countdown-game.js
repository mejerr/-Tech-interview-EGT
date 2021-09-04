import React, { memo, useCallback } from 'react';

const FinalCountdown = memo((props) => {
    const { fields } = props;

    const renderFields = useCallback((field) => {
        return <div>123</div>
    }, []);

    return (
        <div className="final-countdown-container">
            <div className="main-square">
                {fields.map(renderFields)}
            </div>
        </div>
    );
});

FinalCountdown.defaultProps = {
    fields: []
}

export default FinalCountdown;
