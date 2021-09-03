import React, { memo } from 'react';
import Button from '../../components/common/buttons/button';

const Home = memo((props) => {
    const { currentGame } = props;

    return (
        <div className="home-container">
            <div className="welcome-screen-wrapper">
                <div className="welcome-title">Welcome to our games</div>
                <div className="welcome-subtitle">Current game is: {currentGame}</div>
                <div className="choose-game">
                    <Button title={"Choose game"}/>
                </div>
                <div className="welcome-games-buttons">
                <div className="choose-game">
                    <Button title={"Choose game"}/>
                </div>
                <div className="play-game">
                    <Button title={"Play game"}/>
                </div>
                </div>
            </div>
        </div>);
});

Home.defaultProps = {
    currentGame: ''
}

export default Home;
