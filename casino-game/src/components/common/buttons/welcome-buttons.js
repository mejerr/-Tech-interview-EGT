


import React, { memo, useCallback } from 'react';
import Button from './button';
import { GAMES_TAB } from '../../../constants/tabs';
import { FINAL_COUNTDOWN_GAME } from '../../../constants/games';

const WelcomeButtons = memo((props) => {
    const { history, changeActiveTab } = props;

    const onChooseGameClick = useCallback(() => {
        changeActiveTab({ currentTab: GAMES_TAB });

        // No need of navigate, but I want to show route system
        history.push("/games");
    }, [history, changeActiveTab]);

    const onPlayGameClick = useCallback(() => {
        changeActiveTab({ currentTab: FINAL_COUNTDOWN_GAME });

        // No need of navigate, but I want to show route system
        history.push("/games/fn");
    }, [history, changeActiveTab]);

    return (
        <div className="welcome-games-buttons">
        <div className="choose-game">
            <Button title={"Choose game"} onClick={onChooseGameClick}/>
        </div>
        <div className="play-game">
            <Button title={"Play game"} onClick={onPlayGameClick}/>
        </div>
        </div>
    );
});

WelcomeButtons.defaultProps = {
    history: () => {},
    changeActiveTab: () => {}
} 

export default WelcomeButtons;