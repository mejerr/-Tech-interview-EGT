import classNames from 'classnames';
import React, { memo, useCallback } from 'react';

const BetAmount = memo((props) => {
    const { className, amount, changeBetAmount } = props;

    const onChange = useCallback((event) => {
        changeBetAmount({ amount: event.target.value})
    }, [changeBetAmount]);

    return (
        <div className={classNames('bet-amount-container', 'field-container', {
            [className] : className
            })}
        >
            <input className="field-number" value={amount} onChange={onChange}></input>
        </div>
    );
});

BetAmount.defaultProps = {
    className: '',
    amount: 1,
    changeBetAmount: () => {}
};

export default BetAmount;
