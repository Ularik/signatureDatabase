import { createSlice } from "@reduxjs/toolkit";
import type { GlobalError, BlackListCompromiseItem } from "../../../types";
import { getCompromises } from "./compromiseThunks";

export interface CompromiseState {
  compromises: BlackListCompromiseItem[];
  fetchLoading: boolean;
  fetchError: GlobalError | null;
  total: number;
  limit: number;
  offset: number;
}

const initialState: CompromiseState = {
    compromises: [],
    fetchLoading: false,
    fetchError: null,
    total: 0,
    limit: 9,
    offset: 0,
};

export const compromisesSlice = createSlice({
  name: "compromises",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompromises.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(getCompromises.fulfilled, (state, { payload }) => {
      state.fetchLoading = false;
      state.compromises = payload.result !== undefined ? payload.result : [];
      state.total = payload.total;
      state.limit = payload.limit;
      state.offset = payload.offset;
    });
    builder.addCase(getCompromises.rejected, (state, { payload: error }) => {
      state.fetchLoading = false;
      state.fetchError = error || null;
    });
  },
});

export const compromisesRouter = compromisesSlice.reducer;
