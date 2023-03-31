import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {id: '1', content: 'Nội dung bài viết số 1', title: 'Bài 1', rate: 5},
  {id: '2', content: 'Hello', title: 'Bài 2', rate: 2},
  {
    id: '3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, earum?',
    title: 'Bài 3',
    rate: 3,
  },
  {
    id: '4',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore voluptate dicta ab, unde officiis doloribus deleniti veritatis magni similique recusandae.',
    title: 'Bài 4',
    rate: 5,
  },
];

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
      const DataFilter = converData.filter((i) => i.rate > action.payload);
      return DataFilter;
    },
  },
});

export const {addPost, deletePost, editPost, filterPost} = postSlice.actions;

export default postSlice.reducer;
