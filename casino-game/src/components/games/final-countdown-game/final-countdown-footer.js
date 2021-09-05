import React, { memo } from 'react';

const FinalCountdownFooter = memo((props) => {
    const { } = props;

    return (
        <div className="final-countdown-footer-container">
            <div className="total-field"></div>
            <div className="draw-counts-field"></div>
            <div className="bet-sum-field"></div>
        </div>
    );
});

FinalCountdownFooter.defaultProps = {
}

export default FinalCountdownFooter;
