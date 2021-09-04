import React, { memo, useCallback } from 'react';

const Games = memo((props) => {
    const { } = props;

    const renderGames = useCallback(({ gameIcon, gameAlt, title }) => {
        return (
            <div className={`game ${gameAlt}`}>
                <div className="game-title">{title}</div>
                <img key={gameAlt}className={gameAlt} src="../assets/test-icon.jpg" alt={gameAlt} />
            </div>
        )
    }, []);

    const games = [
        {
            gameIcon: "../assets/casino.png",
            gameAlt: "test-game2-icon",
            title: 'Test game'
        },
        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game3-icon",
            title: "My game"
        },
        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game4-icon",
            title: "My game"
        },
        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game-icon",
            title: "My game"
        },
        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game-icon",
            title: "My game"
        },
        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game-icon",
            title: "My game"
        },
        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game-icon",
            title: "My game"
        },
        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game-icon",
            title: "My game"
        },
        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game-icon",
            title: "My game"
        },
        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game-icon",
            title: "My game"
        },
        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game-icon",
            title: "My game"
        },
        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game-icon",
            title: "My game"
        },
        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game-icon",
            title: "My game"
        },        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game-icon",
            title: "My game"
        },        {
            gameIcon: "../assets/test-game-icon.png",
            gameAlt: "my-game-icon",
            title: "My game"
        }
    ]

    return (
        <div className="games-container">
            <div className="games-wrapper">
                {games.map(renderGames)}
            </div>
        </div>
    );
});

Games.defaultProps = {

    isActive: false
}

export default Games;
