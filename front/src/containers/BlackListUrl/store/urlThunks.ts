import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  GlobalError,
  BlackListUrlItem,
  BlackListUrlData
} from "../../../types";
import axiosApi from "../../../axiosApi";
import { isAxiosError } from "axios";

export const getUrlList = createAsyncThunk<
  BlackListUrlData,
  {limit: number, offset: number},
  { rejectValue: GlobalError }
>("url/getUrlList", async ({limit, offset}, { rejectWithValue }) => {
  try {
    const res = await axiosApi.get<BlackListUrlData>(`/api/cti/black-list-url?limit=${limit}&offset=${offset}`);
    return res.data;
  } catch (e) {
    if (isAxiosError(e) && e.response && e.response.status === 400) {
      return rejectWithValue(e.response.data);
    }
    throw e;
  }
});

