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
  {item: URLSearchParams, limit: number, offset: number},
  { rejectValue: GlobalError }
>(
  "compromises/getCompromises",
  async ({ item, limit, offset }, { rejectWithValue }) => {
    
    let url = `/api/cti/black-list-ip?limit=${limit}&offset=${offset}`;
    const queryString = item.toString();

    if (queryString) {
      url += `&${queryString}`;
    }
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
