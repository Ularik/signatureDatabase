import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  GlobalError,
  BlackListIpItem
} from "../../../types";
import axiosApi from "../../../axiosApi";
import { isAxiosError } from "axios";

export const getIpList = createAsyncThunk<
  BlackListIpItem[],
  void,
  { rejectValue: GlobalError }
>("ip/getIpList", async (_, { rejectWithValue }) => {
  try {
    const res = await axiosApi.get<BlackListIpItem[]>(
      "/api/cti/black-list-ip",
    );
    return res.data;
  } catch (e) {
    if (isAxiosError(e) && e.response && e.response.status === 400) {
      return rejectWithValue(e.response.data);
    }
    throw e;
  }
});

