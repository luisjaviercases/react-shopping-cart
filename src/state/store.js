import { configureStore } from '@reduxjs/toolkit';
import baseApi from '@/services/query/baseApi';
import rootReducer from '@/state/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware);
  },
});

export default store;
