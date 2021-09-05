
import {combineReducers } from "redux";
import tabsReducer from './tabs';
import slotsFinalCountdownReducer from './final-countdown-game';

const rootReducer = combineReducers({
    tabs: tabsReducer,
    finalCountdown: slotsFinalCountdownReducer
  });

  export default rootReducer;