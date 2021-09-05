import React, { memo } from 'react';
import TotalField from '../../common/total-field';
import BetAmount from '../../common/bet-amount';

const FinalCountdownFooter = memo((props) => {
    const { totalSum, betAmount, changeBetAmount } = props;

    return (
        <div className="final-countdown-footer-container">
            <TotalField className={'final-countdown'} number={totalSum.toFixed(2)}/>
            <TotalField className={'final-countdown'}/>
            {/* {<div className="draw-counts-field"></div>} */}
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
    changeBetAmount: () => {}
}

export default FinalCountdownFooter;
