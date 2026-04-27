import { createSlice } from "@reduxjs/toolkit";
import type { User, GlobalError, ValidationError } from "../../../types";
import { register, login } from "./userThunks";

export interface UsersState {
  user: User | null;
  registerLoading: boolean;
  registerError: ValidationError | null;
  loginLoading: boolean;
  loginError: GlobalError | null;
  logoutLoading: boolean;
  logoutError: false;
}

const initialState: UsersState = {
  user: null,
  registerLoading: false,
  registerError: null,
  loginLoading: false,
  loginError: null,
  logoutLoading: false,
  logoutError: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    delUser: function (state) {
      state.user = null;
      localStorage.removeItem("refresh");
    },
    updateAccessToken: (state, { payload }) => {
      if (state.user) {
        state.user.token = payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.registerLoading = true;
    });
    builder.addCase(register.fulfilled, (state, { payload: data }) => {
      state.registerLoading = false;
      state.user = { email: data.email, token: data.access };
      localStorage.setItem("refresh", data.refresh);
    });
    builder.addCase(register.rejected, (state, { payload: error }) => {
      state.registerLoading = false;
      state.registerError = error || null;
    });

    builder.addCase(login.pending, (state) => {
      state.loginLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload: data }) => {
      state.loginLoading = false;
      state.user = { email: data.email, token: data.access };
      localStorage.setItem("refresh", data.refresh);
    });
    builder.addCase(login.rejected, (state, { payload: error }) => {
      state.loginLoading = false;
      state.loginError = error || null;
    });
  },
});

export const { delUser, updateAccessToken } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
