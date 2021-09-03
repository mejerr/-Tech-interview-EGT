
import React, { memo } from 'react';

const Button = memo((props) => {
    const { className, title, onClick, isActive } = props;

    return (
        <div className={`button ${className}-button-container ${isActive}`} onClick={onClick}>
            <div className="title">{title}</div>
        </div>
    );
});

Button.defaultProps = {
    className: '',
    title: '',
    isActive: false,
    onClick: () => {}
} 

export default Button;
