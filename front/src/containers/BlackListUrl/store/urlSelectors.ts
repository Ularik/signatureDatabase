import type { RootState } from "../../../app/store";

export const selectUrlList = (state: RootState) => state.blackListUrl.urlList;
export const selectUrlListTotal = (state: RootState) => state.blackListUrl.total;
export const selectUrlLimit = (state: RootState) =>
  state.blackListUrl.limit;
export const selectUrlOffset = (state: RootState) => state.blackListUrl.offset;
export const selectUrlListLoading = (state: RootState) => state.blackListUrl.fetchLoading;
export const selectUrlListError = (state: RootState) => state.blackListUrl.fetchError;
