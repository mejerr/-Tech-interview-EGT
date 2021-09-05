import React, { memo } from 'react';
import TotalField from '../../common/total-field';
import BetAmount from '../../common/bet-amount';
import DrawCountsField from '../../common/draw-counts-field';

const FinalCountdownFooter = memo((props) => {
    const { totalSum, drawCounts, betAmount, changeBetAmount, changeDrawCounts } = props;

    return (
        <div className="final-countdown-footer-container">
            <TotalField className={'final-countdown'} number={totalSum.toFixed(2)}/>
            <DrawCountsField
                className={'final-countdown'}
                changeDrawCounts={changeDrawCounts}
                drawCounts={drawCounts}
            />
            <BetAmount
                className={'final-countdown'}
                changeBetAmount={changeBetAmount}
                amount={betAmount}
            />
        </div>
    );
});

FinalCountdownFooter.defaultProps = {
    totalSum: 0,
    betAmount: 1,
    drawCounts: 1,
    changeBetAmount: () => {},
    changeDrawCounts: () => {}
}

export default FinalCountdownFooter;
