
import {combineReducers } from "redux";
import tabsReducer from './tabs';
import slotsFinalCountdownReducer from './final-countdown-game';
import gamesReducer from './games';

const rootReducer = combineReducers({
    tabs: tabsReducer,
    finalCountdown: slotsFinalCountdownReducer,
    games: gamesReducer
  });

  export default rootReducer;