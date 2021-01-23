import { takeLatest, take, all, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import userActionTypes from './user.types';
import { logInFailure, logInSuccess, logOutFailure, logOutSuccess } from './user.actions';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export function* onLogInStart(){
    yield takeLatest(userActionTypes.LOG_IN_START, logInWithEmail);
}

export function* onLogOutStart(){
    yield takeLatest(userActionTypes.LOG_OUT_START, logOut);
}

export function* logInWithEmail({ payload: {email, password} }){
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);

        const channel = eventChannel(emit => userRef.onSnapshot(emit));

        while (true) {
            const userData = yield take(channel)
            yield put(logInSuccess({id: userData.id, ...userData.data()}))
        }
    } catch (error) {
        yield put(logInFailure(error));
    }
}

export function* logOut(){
    try {
        console.log('saga');
        yield auth.signOut();
        yield put(logOutSuccess());

    } catch (error) {
        yield put(logOutFailure());
    }
}

export function* userSagas(){
    yield all([call(onLogInStart), call(onLogOutStart)]);
}