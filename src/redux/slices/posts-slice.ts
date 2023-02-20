import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPost, IPostsState } from "../../types/redux-state.types";

const initialState: IPostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IPost>) => {
      const result = {
        posts: [...state.posts, action.payload],
      };
      return result;
    },
    remove: (state, action: PayloadAction<number>) => {
      const posts = state.posts.filter((el) => el.id !== action.payload);
      return { posts };
    },

    get: (state, action: PayloadAction<IPostsState>) => {
      state.posts = [...action.payload.posts];
      return state;
    },
  },
});

export const { get, remove, add } = postsSlice.actions;
export const showPosts = (state: { posts: IPostsState }) => state.posts;
export default postsSlice.reducer;
