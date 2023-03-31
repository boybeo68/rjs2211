import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Day la du lieu trong redux',
    id: 12313,
    token:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores amet modi quam sapiente officiis qui quasi molestias quia at',
  },
  //   list action trong reducers
  reducers: {
    changeToken: (state, action) => {
      state.token = 'Token da duoc doi ';
    },
    changeName: (state, action) => {
      state.name = action.payload.data;
    },
  },
});

export const {changeToken, changeName} = userSlice.actions;

export default userSlice.reducer;
