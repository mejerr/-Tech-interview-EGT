
import React, { memo, useCallback } from 'react';
import Button from './button';
import menuIcon from '../../../assets/menu-icon.png';
import { HOME_TAB, GAMES_TAB } from '../../../constants/tabs';

const HeaderButtons = memo((props) => {
    const { activeTab, history, changeActiveTab } = props;
    console.log(history)

    const navHome = useCallback(() => {
        changeActiveTab({ currentTab: HOME_TAB });

        // No need of navigate, but I want to show route system
        history.push("/");
    }, [history, changeActiveTab]);

    const navGames = useCallback(() => {
        changeActiveTab({ currentTab: GAMES_TAB });

        // No need of navigate, but I want to show route system
        history.push("/games");
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
    history: () => {},
    changeActiveTab: () => {}
}

export default HeaderButtons;
