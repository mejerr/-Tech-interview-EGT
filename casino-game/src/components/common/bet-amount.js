import classNames from 'classnames';
import React, { memo, useCallback } from 'react';
import FinalCountdownButtons from '../games/final-countdown-game/final-countdown-buttons/final-countdown-buttons';

const BetAmount = memo((props) => {
    const { className, amount, changeBetAmount, addBetAmount, removeBetAmount } = props;

    const onChange = useCallback((event) => {
        changeBetAmount({ amount: event.target.value})
    }, [changeBetAmount]);

    return (
        <div className={classNames('bet-amount-container', 'field-container', {
            [className] : className
            })}
        >
            <div className="title">{"Bet"}</div>
            <FinalCountdownButtons addOneAmount={addBetAmount} removeOneAmount={removeBetAmount}>
                <input className="field-number" value={amount} onChange={onChange}></input>
            </FinalCountdownButtons>
        </div>
    );
});

BetAmount.defaultProps = {
    className: '',
    amount: 1,
    changeBetAmount: () => {},
    addBetAmount: () => {},
    removeBetAmount: () => {}
};

export default BetAmount;
