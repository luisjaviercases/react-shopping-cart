import { combineReducers } from 'redux';
import baseApi from '@/services/query/baseApi';
import { cartReducer } from '@/state/cart/cartSlice';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  cart: cartReducer,
});

export default rootReducer;
