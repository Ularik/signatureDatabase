import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  GlobalError,
  SearchFilters,
  BlackListCompromiseData,
} from "../../../types";
import axiosApi from "../../../axiosApi";
import { isAxiosError } from "axios";

export const getCompromises = createAsyncThunk<
  BlackListCompromiseData,
  SearchFilters,
  { rejectValue: GlobalError }
>(
  "compromises/getCompromises",
  async ({ item, limit, offset }, { rejectWithValue }) => {
    let url = `/api/cti/threat-list?limit=${limit}&offset=${offset}`;
    if (item) url += `&${item.key}=${item.item}`;
    try {
      const res = await axiosApi.get<BlackListCompromiseData>(url);
      return res.data;
    } catch (e) {
      if (isAxiosError(e) && e.response && e.response.status === 400) {
        return rejectWithValue(e.response.data);
      }
      throw e;
    }
  },
);
