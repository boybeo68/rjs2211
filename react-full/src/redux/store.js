import {configureStore} from '@reduxjs/toolkit';
import couterSlice from './feature/couterSlice';
import postSlice from './feature/postSlice';
import userReducer from './feature/userSlice';

export default configureStore({
  reducer: {
    userReducer: userReducer,
    couterReducer: couterSlice,
    posts: postSlice,
  },
});
