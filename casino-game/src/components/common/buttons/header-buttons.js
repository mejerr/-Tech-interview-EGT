
import React, { memo, useCallback } from 'react';
import Button from './button';
import menuIcon from '../../../assets/menu-icon.png';
import { HOME_TAB, GAMES_TAB } from '../../../constants/tabs';

const HeaderButtons = memo((props) => {
    const { activeTab, history, changeActiveTab } = props;

    const navHome = useCallback(() => {
        // No need of navigate, but I want to show route system
        history.push("/home");

        changeActiveTab({ currentTab: HOME_TAB });
    }, [history, changeActiveTab]);

    const navGames = useCallback(() => {
        // No need of navigate, but I want to show route system
        history.push("/games");

        changeActiveTab({ currentTab: GAMES_TAB });
    }, [history, changeActiveTab]);

    return (
        <div className="header-buttons-container">
            <img className="header-menu-icon" src={menuIcon} alt="menu"></img>
            <div className="header-buttons">
                <Button className={"Home"} title={"Home"} isActive={activeTab === HOME_TAB} onClick={navHome}/>
                <Button className={"Games"} title={"Games"} isActive={activeTab === GAMES_TAB} onClick={navGames}/>
            </div>
        </div>
    );
});

HeaderButtons.defaultProps = {
    activeTab: HOME_TAB,
    history: {}
}

export default HeaderButtons;
