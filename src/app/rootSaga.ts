import { PayloadAction } from '@reduxjs/toolkit';
import { counterSaga } from 'features/counter/counterSaga';
import { increment } from 'features/counter/counterSlice';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
function* helloSaga(){
     console.log('hello saga')

}

function* fetchSaga(action: PayloadAction){ 
        const user = 'Hieu'
        console.log(action);  
}
export default function* rootSaga() {
    console.log('rootSaga - ok');
    yield all([helloSaga(),counterSaga()])
    // yield takeEvery('counter/increment',fetchSaga)
    // yield takeEvery('counter/decrement',fetchSaga)
    yield takeLatest(increment().type,fetchSaga) 
}