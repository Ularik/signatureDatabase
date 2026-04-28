import type { RootState } from "../../../app/store";

export const selectIpList = (state: RootState) => state.blackListIp.ipList;
export const selectIpListLoading = (state: RootState) => state.blackListIp.fetchLoading;
export const selectIpListError = (state: RootState) => state.blackListIp.fetchError;

export const selectIpTotal = (state: RootState) => state.blackListIp.total;
export const selectIpLimit = (state: RootState) => state.blackListIp.limit;
