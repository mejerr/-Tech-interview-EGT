import React, { memo, useCallback } from 'react';
import classNames from 'classnames';
import { GAMES } from '../../constants/games';

const Games = memo((props) => {
    const { setCurrentGame, history } = props;

    const onClick = useCallback((game) => {
        if (game.isDisabled) {
            return;
        }

        setCurrentGame({ currentGame: game });
        history.push('/');
    }, [setCurrentGame, history]);

    const renderGames = useCallback(({ gameName = '',gameIcon, gameAlt, title, isDisabled }, index) => {
        return (
            <div className={classNames('game', [gameAlt], {
                'disabled': isDisabled
            })} key={index} onClick={() => onClick({ gameName, gameIcon, gameAlt, title, isDisabled })}>
                <div className="game-title">{title}</div>
                <img className={gameAlt} src={gameIcon} alt={gameAlt} />
            </div>
        )
    }, []);

    return (
        <div className="games-container content">
            <div className="games-wrapper">
                {GAMES.map(renderGames)}
            </div>
        </div>
    );
});

Games.defaultProps = {
    setCurrentGame: () => {},
    history: () => {},
}

export default Games;
