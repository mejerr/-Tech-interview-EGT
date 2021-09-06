import React, { memo } from 'react';

const Button = memo((props) => {
    const { type, onClick } = props;

    return (
        <div className="final-countdown-button-container" onClick={onClick}>
            <div className="button-type">{type}</div>
        </div>
    );
});

Button.defaultProps = {
    type: '+',
    onClick: () => {}
}

export default Button;
