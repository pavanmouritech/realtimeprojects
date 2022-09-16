import {all, fork} from 'redux-saga/effects';
import watchProductRequest from '../Productlist/saga';



export default function* rootSaga() {
  yield all([fork(watchProductRequest),]);
}
