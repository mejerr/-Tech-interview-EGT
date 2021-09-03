
import React, { memo } from 'react';
import Button from './button';
import menuIcon from '../../../assets/menu-icon.png';

const HeaderButtons = memo((props) => {
    const { } = props;

    return (
        <div className="header-buttons-container">
            <img className="header-menu-icon" src={menuIcon} alt="menu"></img>
            <div className="header-buttons">
                <Button className={"Home"} title={"Home"} isActive={"active"}/>
                <Button className={"Games"} title={"Games"} isActive={false}/>
            </div>
        </div>
    );
});

export default HeaderButtons;
