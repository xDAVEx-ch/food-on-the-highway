import { takeLatest, take, all, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import userActionTypes from './user.types';
import { 
    logInFailure,
    logInSuccess,
    logOutFailure,
    logOutSuccess ,
    setCurrentUser,
    setUserError,
    signUpFailure,
    signUpSuccess
} from './user.actions';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

let authChannel = null;

const getAuthChannel = () => {
    if (!authChannel) {
        authChannel = eventChannel(emit => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => emit({ userAuth }));
        return unsubscribe;
      });
    }

    return authChannel;
};

export function* onLogInStart(){
    yield takeLatest(userActionTypes.LOG_IN_START, logInWithEmail);
}

export function* onLogOutStart(){
    yield takeLatest(userActionTypes.LOG_OUT_START, logOut);
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* watchForFirebaseAuth(additionalData){

    const authChannel = yield call(getAuthChannel);

    try {
        while(true){
            const { userAuth } = yield take(authChannel);

            if(userAuth){
                const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
                const snapshot = yield userRef.get();

                yield put(
                    setCurrentUser({id: snapshot.id, ...snapshot.data()})
                );

            } else {
                setCurrentUser(userAuth);
            }
        }
    } catch (error) {
        yield put(setUserError(error));
    }
    
}

export function* logInWithEmail({ payload: {email, password} }){
    try {
        yield auth.signInWithEmailAndPassword(email, password);
        yield call(watchForFirebaseAuth);
    } catch (error) {
        yield put(logInFailure(error.code));
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

export function* signUp({ payload: {email, password, ...userNameAndType} }){
    try{
        yield auth.createUserWithEmailAndPassword(email, password);
        const list = [];

        yield call(watchForFirebaseAuth, {...userNameAndType, list});

    } catch (error){
        yield put(signUpFailure(error));
    }
}

export function* userSagas(){
    yield all([
        call(onLogInStart), call(onLogOutStart), call(onSignUpStart)
    ]);
}