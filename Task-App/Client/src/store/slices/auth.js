import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callRegisterUserApi, callLoginUserApi, callLogoutUSerApi } from "@/services";
import { useEffect } from "react";

const initialState = {
  loginUser: {
    Email: "",
    Password: "",
  },
  registerUser: {
    name: "",
    email: "",
    password: "",
  },
  isAuthenticated: null,
  registerStatus: 'idle',
  registerError: null,
  loginStatus: 'idle',
  loginError: null,
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await callRegisterUserApi(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await callLoginUserApi(userData);
      return response;

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  async({rejectWithValue})=>{
    try{
      const response = await callLogoutUSerApi();
      return response.data;
    }catch(error){
      return rejectWithValue(err.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registerStatus = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerStatus = 'succeeded';
        state.registerUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerStatus = 'failed';
        state.registerError = action.payload;
      });
  },
});

export const {handleAuth } = authSlice.actions;

export default authSlice.reducer;
