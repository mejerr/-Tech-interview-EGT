import React, { memo } from 'react';
import Button from '../../components/common/buttons/button';
import WelcomeButtons from '../../containers/common/buttons/welcome-buttons';

const Home = memo((props) => {
    const { currentGame } = props;

    return (
        <div className="home-container">
            <div className="welcome-screen-wrapper">
                <div className="welcome-title">Welcome to our games</div>
                <div className="welcome-subtitle">Current game is: {currentGame}</div>
                {/*Should be img tag and current game photo */}
                <div className="choose-game">
                    <Button title={"Choose game"}/>
                </div>
                <WelcomeButtons />
            </div>
        </div>
    );
});

Home.defaultProps = {
    currentGame: ''
}

export default Home;
