import { CHANGE_ACTIVE_TAB } from '../constants/tabs';

export const changeActiveTab = ({ currentTab }) => ({
    type: CHANGE_ACTIVE_TAB,
    payload: { currentTab }
})