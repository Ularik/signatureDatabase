import { createSlice } from "@reduxjs/toolkit";
import type { GlobalError, BlackListUrlItem } from "../../../types";
import { getUrlList } from "./urlThunks";

export interface UrlState {
  urlList: BlackListUrlItem[];
  total: number;
  limit: number;
  offset: number;
  fetchLoading: boolean;
  fetchError: GlobalError | null;
}

const initialState: UrlState = {
  urlList: [],
  total: 1,
  limit: 10,
  offset: 0,
  fetchLoading: false,
  fetchError: null,
};

export const urlSlice = createSlice({
  name: "blackListUrl",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUrlList.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(getUrlList.fulfilled, (state, { payload }) => {
      state.fetchLoading = false;
      state.urlList = payload.result;
      state.total = payload.total;
      state.limit = payload.limit;
      state.offset = payload.offset
    });
    builder.addCase(getUrlList.rejected, (state, { payload: error }) => {
      state.fetchLoading = false;
      state.fetchError = error || null;
    });
  },
});

export const urlRouter = urlSlice.reducer;
