import { PayloadAction } from '@reduxjs/toolkit';
import { delay, takeEvery, takeLatest, put, takeLeading, call } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';
import {fetchCount} from './counterAPI'


function* handleIncreamentSaga(action: PayloadAction<number>){
    console.log("Waiting 2s")
    //wait 2s
    yield delay(2000)
    console.log("waiting done!")
    yield put(incrementSagaSuccess(action.payload))
}
export function* counterSaga(){
    console.log('couter-Saga')
    yield takeLeading(incrementSaga.toString(),handleIncreamentSaga)
}

function* test(){
    yield fetchCount(2);
    yield call(fetchCount,2)
}