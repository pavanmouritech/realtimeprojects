import {call, put, SagaReturnType, takeLatest} from '@redux-saga/core/effects';
import {AxiosResponse} from 'axios';
import { AxiosProps, requestApi } from '../../../configApi/axios';
import {productSuccess, productError, callProduct} from '../slice';

function* productList(): SagaReturnType<any> {
  try {
    const requestParams: AxiosProps = {
      type: 'GET',
      url: 'products',
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;

    if (data) {
      yield put(productSuccess(response.data));
    } else {
      yield put(productError(response.data));
    }
  } catch (error) {
    yield put(productError({error: 'Server Error'}));
  }
}

export default function* watchAlbumRequest (){
  yield takeLatest(callProduct,productList);
}
