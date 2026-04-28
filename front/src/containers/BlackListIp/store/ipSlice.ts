import { createSlice } from "@reduxjs/toolkit";
import type { GlobalError, BlackListIpItem } from "../../../types";
import { getIpList } from "./ipThunks";

export interface IpState {
  ipList: BlackListIpItem[];
  fetchLoading: boolean;
  fetchError: GlobalError | null;
  total: number;
  limit: number;
  offset: number;
}

const initialState: IpState = {
  ipList: [],
  fetchLoading: false,
  fetchError: null,
  total: 0,
  limit: 9,
  offset: 0
};

export const ipSlice = createSlice({
  name: "blackListIp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIpList.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(getIpList.fulfilled, (state, { payload }) => {
      state.fetchLoading = false;
      state.ipList = payload.result;
      state.total = payload.total;
      state.limit = payload.limit;
      state.offset = payload.offset;
    });
    builder.addCase(getIpList.rejected, (state, { payload: error }) => {
      state.fetchLoading = false;
      state.fetchError = error || null;
    });
  },
});

export const ipRouter = ipSlice.reducer;
