import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  GlobalError,
  BlackListCompromiseItem
} from "../../../types";
import axiosApi from "../../../axiosApi";
import { isAxiosError } from "axios";

export const getCompromises = createAsyncThunk<
  BlackListCompromiseItem[],
  void,
  { rejectValue: GlobalError }
>("compromises/getCompromises", async (_, { rejectWithValue }) => {
  try {
    const res = await axiosApi.post<BlackListCompromiseItem[]>(
      "/api/cti/threat-list/",
    );
    return res.data;
  } catch (e) {
    if (isAxiosError(e) && e.response && e.response.status === 400) {
      return rejectWithValue(e.response.data);
    }
    throw e;
  }
});

