
import React, { memo } from 'react';
import classNames from 'classnames';

const Button = memo((props) => {
    const { className, title, onClick, isActive } = props;

    return (
        <div className={classNames(`button ${className}-button-container`, { 'active': isActive })} onClick={onClick}>
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
