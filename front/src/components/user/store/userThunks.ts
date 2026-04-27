import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store";
import type {
  RegisterPost,
  LoginPost,
  AuthResponse,
  ValidationError,
  GlobalError,
  LoginError,
} from "../../../types";
import axiosApi from "../../../axiosApi";
import { isAxiosError } from "axios";


export const register = createAsyncThunk<
  AuthResponse,
  RegisterPost,
  { rejectValue: ValidationError }
>("users/register", async (registerPost, { rejectWithValue }) => {
  try {
    const res = await axiosApi.post<AuthResponse>("/users/", registerPost);
    return res.data;
  } catch (e) {
    if (isAxiosError(e) && e.response && e.response.status === 400) {
      return rejectWithValue(e.response.data);
    }
    throw e;
  }
});


export const login = createAsyncThunk<
  AuthResponse,
  LoginPost,
  { rejectValue: LoginError }
>("users/login", 

  async (loginPost, { rejectWithValue }) => {
  try {
    const res = await axiosApi.post<AuthResponse>("/api/token/pair", loginPost);
    return res.data;
  } catch (e) {
    if (isAxiosError(e) && e.response && e.response.status === 401) {
      return rejectWithValue(e.response.data);
    }
    throw e;
  }
});

