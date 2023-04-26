import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/AuthService';
import axios from 'axios';
import { API_URL } from '../../http';
import { AuthResponse } from '../../models/response/AuthResponse';

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  'authorization/login',
  async ({ email, password }: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(email, password);
      return response.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const registration = createAsyncThunk(
  'authorization/registration',
  async ({ email, password }: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await AuthService.registration(email, password);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk('authorization/logout', async (_, { rejectWithValue }) => {
  try {
    const response = await AuthService.logout();
    return response;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const checkAuth = createAsyncThunk(
  'authorization/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
