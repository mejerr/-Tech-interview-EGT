import React, { memo } from 'react';
import TotalField from '../../common/total-field';

const FinalCountdownFooter = memo((props) => {
    const { } = props;

    return (
        <div className="final-countdown-footer-container">
            <TotalField />
            <TotalField />
            <TotalField />
            {/* {<div className="draw-counts-field"></div>
            <div className="bet-sum-field"></div>} */}
        </div>
    );
});

FinalCountdownFooter.defaultProps = {
}

export default FinalCountdownFooter;
