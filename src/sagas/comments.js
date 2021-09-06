import { call, put, select, takeLatest } from 'redux-saga/effects';
import { showComments,  } from '../services/final-countdown-game';
import { consumeComments, resetCommentsState  } from '../actions/final-countdown-game';
import { SHOW_COMMENTS, INIT_COMMENTS } from "../constants/final-countdown";

function* onShowComments() {
    const selectedSlots = yield select(state => state.finalCountdown.selectedIds);

    if (!selectedSlots.length) {
        return;
    }

    try {
        let comments = [];
        for (let slot of selectedSlots) {
            const { data } = yield call(showComments, { commentId: [slot] });

            comments.push(data)
        }

        yield put(consumeComments({ comments }));
        yield put(resetCommentsState());
    }
    catch (error) {
        console.error(error);
    }
}

function* onInitComments() {
    const allComments = yield select(state => state.finalCountdown.comments.ids);

    if (allComments.length) {
        return;
    }

    try {
        let comments = [];
        for (let i = 1; i <= 10; i++) {
            const { data } = yield call(showComments, { commentId: [i] });
            comments = [...comments, data]
        }

        yield put(consumeComments({ comments: comments.sort((a, b) => b[0].postId - a[0].postId ) }));
    }
    catch (error) {
        console.error(error);
    }
}

export default function* watchComments() {
    yield takeLatest(SHOW_COMMENTS, onShowComments)
    yield takeLatest(INIT_COMMENTS, onInitComments)
}