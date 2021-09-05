import finalCountDownIcon from '../assets/final-countdown.png';
import gameBoyIcon from '../assets/game-boy.png';
import machinesIcon from '../assets/machines.png';
import diamondsSky from '../assets/diamonds-sky.png';
import jewelryIcon from '../assets/jewelry.png';
import comboDotsIcon from '../assets/combo-dots.png';
import flyingChipIcon from '../assets/flying-chip.png';
import masterDogIcon from '../assets/master-dog.png';
import soldIcon from '../assets/sold.png';

export const PLAY_GAME = 'PLAY_GAME';
export const SET_CURRENT_GAME = 'SET_CURRENT_GAME';

export const FINAL_COUNTDOWN_GAME = 'FINAL_COUNTDOWN_GAME';

export const GAMES_NAMES = {
    [FINAL_COUNTDOWN_GAME]: 'Final countdown'
};

export const GAMES = [
    {
        gameIcon: gameBoyIcon,
        gameAlt: "game-boy",
        title: 'Game boy',
        isDisabled: true
    },
    {
        gameName: GAMES_NAMES.FINAL_COUNTDOWN_GAME,
        gameIcon: finalCountDownIcon,
        gameAlt: "final-countdown",
        title: "Final countdown",
        isDisabled: false
    },
    {
        gameIcon: machinesIcon,
        gameAlt: "machines",
        title: "Machines",
        isDisabled: true
    },
    {
        gameIcon: diamondsSky,
        gameAlt: "sky-diamonds",
        title: "Sky diamonds",
        isDisabled: true
    },
    {
        gameIcon: jewelryIcon,
        gameAlt: "jewelry",
        title: "Jewelry",
        isDisabled: true
    },
    {
        gameIcon:comboDotsIcon,
        gameAlt: "combo-dots",
        title: "Combo dots",
        isDisabled: true
    },
    {
        gameIcon: flyingChipIcon,
        gameAlt: "flying-chip",
        title: "Flying chip",
        isDisabled: true
    },
    {
        gameIcon: masterDogIcon,
        gameAlt: "master-dog",
        title: "Master dog",
        isDisabled: true
    },
    {
        gameIcon: soldIcon,
        gameAlt: "sold",
        title: "Sold",
        isDisabled: true
    }
];