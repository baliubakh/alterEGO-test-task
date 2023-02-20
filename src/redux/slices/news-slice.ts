import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INews, INewsState } from "../../types/redux-state.types";

const initialState: INewsState = {
  news: [],
};

export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<INews>) => {
      const result = {
        news: [...state.news, action.payload],
      };
      return result;
    },
    remove: (state, action: PayloadAction<number>) => {
      const news = state.news.filter((el) => el.id !== action.payload);
      return { news };
    },

    get: (state, action: PayloadAction<INewsState>) => {
      state.news = [...action.payload.news];
      return state;
    },
  },
});

export const { get, remove, add } = NewsSlice.actions;
export const showNews = (state: { news: INewsState }) => state.news;
export default NewsSlice.reducer;
