import React, { memo } from 'react';
import WelcomeButtons from '../../containers/common/buttons/welcome-buttons';

const Home = memo((props) => {
    const { currentGame } = props;
    const { gameName, gameIcon } = currentGame;

    return (
        <div className="home-container content">
            <div className="welcome-screen-wrapper">
                <div className="welcome-title">Welcome to our games</div>
                <div className="welcome-subtitle">Current game is: <span>{gameName}</span></div>
                <img className="current-game-icon"  src={gameIcon} alt="game-logo" />
                <WelcomeButtons />
            </div>
        </div>
    );
});

Home.defaultProps = {
    currentGame: {}
}

export default Home;
