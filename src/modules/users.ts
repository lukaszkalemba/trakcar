import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from 'index';
import { rootApi } from 'utils/api';
import { setAuthToken } from 'helpers/setAuthToken';

interface UserData {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  date: string;
}

export interface UserState {
  token: string | null;
  user: UserData | null;
  loading: boolean;
}

const initialState: UserState = {
  token: localStorage.getItem('token'),
  user: null,
  loading: true,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUserData: (state, { payload }: PayloadAction<{ data: UserData }>) => {
      state.loading = false;
      state.user = payload.data;
    },
    setUser: (state, { payload }: PayloadAction<{ data: string }>) => {
      localStorage.setItem('token', payload.data);

      state.token = payload.data;
      state.loading = false;
    },
  },
});

export const { getUserData, setUser } = userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state: { user: UserState }) => state.user;

export const loadUserData = (): AppThunk => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${rootApi}/api/v1/users`);

    dispatch(getUserData(res.data));
  } catch (error) {
    console.log(error);
  }
};

export interface SigninValues {
  email: string;
  password: string;
}

export const signInUser = ({
  email,
  password,
}: SigninValues): AppThunk => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${rootApi}/api/v1/users/login`, body, config);

    dispatch(setUser(res.data));
    dispatch(loadUserData());
  } catch (error) {
    console.log(error);
  }
};

export interface SignupValues extends SigninValues {
  name: string;
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

    dispatch(setUser(res.data));
    dispatch(loadUserData());
  } catch (error) {
    console.log(error);
  }
};
