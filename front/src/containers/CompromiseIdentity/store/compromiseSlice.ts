import { createSlice } from "@reduxjs/toolkit";
import type { GlobalError, BlackListCompromiseItem } from "../../../types";
import { getCompromises } from "./CompromiseThunks";

export interface CompromiseState {
  compromises: BlackListCompromiseItem[];
  fetchLoading: boolean;
  fetchError: GlobalError | null;
}

const initialState: CompromiseState = {
    compromises: [],
    fetchLoading: false,
    fetchError: null,
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
      state.compromises = payload;
    });
    builder.addCase(getCompromises.rejected, (state, { payload: error }) => {
      state.fetchLoading = false;
      state.fetchError = error || null;
    });
  },
});

export const compromisesRouter = compromisesSlice.reducer;
