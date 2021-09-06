import React, { memo } from 'react';
import { NEGATIVE_TYPE, POSITIVE_TYPE } from '../../../../constants/final-countdown';
import Button from '../final-countdown-buttons/final-countdown-button';

const FinalCountdownButtons = memo((props) => {
    const { children, addOneAmount, removeOneAmount } = props;

    return (
        <div className="final-countdown-buttons-container">
            {children ?
                <div className="final-countdown-buttons-content">
                    <Button type={POSITIVE_TYPE} onClick={addOneAmount}/>
                        {children}
                    <Button type={NEGATIVE_TYPE} onClick={removeOneAmount}/>
                </div> : null}
        </div>
    );
});

FinalCountdownButtons.defaultProps = {
    children: false,
    removeOneAmount: () => {},
    addOneAmount: () => {}
}

export default FinalCountdownButtons;
