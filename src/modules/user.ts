import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from 'index';
import { rootApi } from 'utils/api';

export interface UserState {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  user: any;
}

const initialState: UserState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, { payload }: PayloadAction<{ data: string }>) => {
      localStorage.setItem('token', payload.data);

      state.token = payload.data;
      state.isAuthenticated = true;
      state.loading = false;
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state: { user: UserState }) => state.user;

export interface SignupValues {
  name: string;
  email: string;
  password: string;
}

export const signUpUser = ({
  name,
  email,
  password,
}: SignupValues): AppThunk => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(`${rootApi}/api/v1/users`, body, config);

    dispatch(createUser(res.data));
  } catch (error) {
    console.log(error);
  }
};
