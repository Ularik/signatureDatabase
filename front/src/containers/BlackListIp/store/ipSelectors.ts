import type { RootState } from "../../../app/store";

export const selectIpList = (state: RootState) => state.blackListIp.ipList;
export const selectIpListLoading = (state: RootState) => state.blackListIp.fetchLoading;
export const selectIpListError = (state: RootState) => state.blackListIp.fetchError;
