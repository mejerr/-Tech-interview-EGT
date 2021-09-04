
import {combineReducers } from "redux";
import tabsReducer from './tabs';
import slotsReducer from './slots';

const rootReducer = combineReducers({
    tabs: tabsReducer,
    slots: slotsReducer
  });

  export default rootReducer;