import type { RootState } from "../../../app/store";

export const selectCompromises = (state: RootState) =>
  state.compromises.compromises;
export const selectCompromisesLoading = (state: RootState) =>
  state.compromises.fetchLoading;
export const selectCompromisesError = (state: RootState) =>
  state.compromises.fetchError;

export const selectCompromisesTotal = (state: RootState) =>
  state.compromises.total;

export const selectCompromisesLimit = (state: RootState) =>
  state.compromises.limit;