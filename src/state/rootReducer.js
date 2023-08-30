import { combineReducers } from 'redux';
import baseApi from '@/services/query/baseApi';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
