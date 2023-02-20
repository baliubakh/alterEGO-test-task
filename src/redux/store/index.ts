import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "../slices/news-slice";
import postsSlice from "../slices/posts-slice";

export const store = configureStore({
  reducer: {
    news: newsSlice,
    posts: postsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
