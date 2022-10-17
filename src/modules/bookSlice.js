import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getPostListApi,
  createReviewApi,
  getPostApi,
  delPostApi,
} from "../api/postApi";

export const __createReview = createAsyncThunk(
  "createReview",
  async (payload, thunkAPI) => {
    await createReviewApi(payload);
    thunkAPI.dispatch(createReview(payload));
  }
);

export const __getPostList = createAsyncThunk(
  "getPostList",
  async (_, thunkAPI) => {
    //_의 정체?
    const response = await getPostListApi();
    thunkAPI.dispatch(getPostList(response));
  }
);

export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    const response = await getPostApi(payload);
    thunkAPI.dispatch(getPost(response));
  }
);

export const __delPost = createAsyncThunk(
  "delPost",
  async (payload, thunkAPI) => {
    await delPostApi(payload);
  }
);

const initialState = {
  posts: [],
  post: {},
};

const bookSlice = createSlice({
  name: "createReview",
  initialState,
  reducers: {
    createReview: (state, action) => {
      const id = state[state.length - 1]?.id + 1 || 0;
      // db 저장과는 별개로 state를 관리한다. 통신은 적을수록 좋기 때문
      state.push({ ...action.payload, id });
    },

    getPostList: (state, action) => {
      state.posts = action.payload;
    },

    getPost: (state, action) => {
      state.post = action.payload;
    },

    // delPost: (state, action) => {
    //   console.log("@stae.posts", state.posts);
    //   state.posts = state.posts;
    // .filter(post => post.id !== action.payload);
    // },
  },
});

export const { createReview, getPostList, getPost, delPost } =
  bookSlice.actions;
export default bookSlice.reducer;
