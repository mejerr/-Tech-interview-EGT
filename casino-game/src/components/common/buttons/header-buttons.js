
import React, { memo, useCallback } from 'react';
import Button from './button';
import menuIcon from '../../../assets/menu-icon.png';

const HeaderButtons = memo((props) => {
    const { history } = props;

    const navHome = useCallback(() => {
        history.push("/home");
    }, [history]);

    const navGames = useCallback(() => {
        history.push("/games");
    }, [history]);

    return (
        <div className="header-buttons-container">
            <img className="header-menu-icon" src={menuIcon} alt="menu"></img>
            <div className="header-buttons">
                <Button className={"Home"} title={"Home"} isActive={"active"} onClick={navHome}/>
                <Button className={"Games"} title={"Games"} isActive={false} onClick={navGames}/>
            </div>
        </div>
    );
});

HeaderButtons.defaultProps = {
    history: {}
}

export default HeaderButtons;
