import type { RootState } from "../../../app/store";

export const selectCompromises = (state: RootState) => state.compromises.compromises;
export const selectCompromisesLoading = (state: RootState) => state.compromises.fetchLoading;
export const selectCompromisesError = (state: RootState) => state.compromises.fetchError;
