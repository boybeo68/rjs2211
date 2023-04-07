import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {},
  dataFilter: null,
  loading: false,
  error: null,
};

export const getListPost = createAsyncThunk(
  'products/getList',
  async (arg, thunkApi) => {
    console.log('bb arg', arg);
    console.log('bb thunkapi', thunkApi.getState());
    const res = await axios.get(
      `https://reacjs2201-default-rtdb.firebaseio.com/products.json?auth=${
        thunkApi.getState()?.userReducer?.token
      }`,
    );
    return res.data;
  },
);
export const deletePostAPI = createAsyncThunk(
  'products/deletePost',
  async (arg, thunkApi) => {
    // console.log('bb arg', arg);
    // console.log('bb thunkapi', thunkApi.getState());
    const res = await axios.delete(
      `https://reacjs2201-default-rtdb.firebaseio.com/products/${arg}.json?auth=${
        thunkApi.getState()?.userReducer?.token
      }`,
    );
    thunkApi.dispatch(getListPost());
    return res.data;
  },
);

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      // push là method thay đổi trực tiếp state
      state.push({
        id: action.payload.id,
        content: action.payload.content,
        title: action.payload.title,
        rate: 0,
      });
    },
    deletePost: (state, action) => {
      const newData = state.filter((i) => i.id !== action.payload);
      return newData;
    },
    editPost: (state, action) => {},
    filterPost: (state, action) => {
      // lọc tất cả những bài post có rate > action.payload
      const converData = JSON.parse(JSON.stringify(state));
      const DataFilter = Object.keys(converData.data).filter(
        (i) => converData.data[i].rate > action.payload,
      );
      state.dataFilter = DataFilter;
    },
    resetPost: (state, action) => {
      state.dataFilter = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getListPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getListPost.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getListPost.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Bị lỗi rồi';
      })
      .addCase(deletePostAPI.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deletePostAPI.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deletePostAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Bị lỗi rồi';
      });
  },
});

export const {addPost, deletePost, editPost, filterPost, resetPost} =
  postSlice.actions;

export default postSlice.reducer;
