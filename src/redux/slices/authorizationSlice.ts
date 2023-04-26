import { createSlice, PayloadAction, isAnyOf } from '@reduxjs/toolkit';
import { login, registration, logout, checkAuth } from '../thunks/authorizationThunk';
import { IUser } from '../../models/iUser';
import { AuthResponse } from '../../models/response/AuthResponse';
import { RootState } from '../store/store';

interface AuthorizationState {
  user: IUser | null;
  isAuth: boolean;
  isLoading: boolean;
  errors: string | null;
}

const initialState: AuthorizationState = {
  user: null,
  isAuth: false,
  isLoading: false,
  errors: null,
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        localStorage.removeItem('token');
      })
      .addMatcher(
        isAnyOf(login.pending, registration.pending, logout.pending, checkAuth.pending),
        (state) => {
          state.user = null;
          state.isAuth = false;
          state.isLoading = true;
          state.errors = null;
        }
      )
      .addMatcher(
        isAnyOf(login.fulfilled, registration.fulfilled, checkAuth.fulfilled),
        (state, action: PayloadAction<AuthResponse>) => {
          state.user = action.payload.user;
          state.isAuth = true;
          state.isLoading = false;
          state.errors = null;
          localStorage.setItem('token', action.payload.accessToken);
        }
      )
      .addMatcher(
        isAnyOf(login.rejected, registration.rejected, logout.rejected, checkAuth.rejected),
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          console.log(action.payload);
          state.errors = action.payload || 'Непредвиденная ошибка, попробуйте снова';
        }
      );
  },
});

export const authSelector = (state: RootState) => state.authorizationSlice;
export default authorizationSlice.reducer;
