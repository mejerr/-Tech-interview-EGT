import { call, put, select, takeLatest } from 'redux-saga/effects';
import { showComments,  } from '../services/final-countdown-game';
import { consumeComments  } from '../actions/final-countdown-game';
import { SHOW_COMMENTS } from "../constants/final-countdown";

function* onShowComments() {
    const selectedSlots = yield select(state => state.finalCountdown.selectedIds);

    try {
        let comments = [];
        for (let slot of selectedSlots) {
            const { data } = yield call(showComments, { commentId: [slot] });
            comments = [...comments, comments.includes(slot) ? [...comments] : data];
        }

        yield put(consumeComments({ comments }));
    }
    catch (error) {
        console.error(error);
    }
}

export default function* watchComments() {
    yield takeLatest(SHOW_COMMENTS, onShowComments)
}