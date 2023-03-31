import {configureStore} from '@reduxjs/toolkit';
import couterSlice from './feature/couterSlice';
import userReducer from './feature/userSlice';

export default configureStore({
  reducer: {
    userReducer: userReducer,
    couterReducer: couterSlice,
  },
});
