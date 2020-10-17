import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from 'index';
import { rootApi } from 'utils/api';

export interface SignupState {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  user: any;
}

const initialState: SignupState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  // todo initial loading should be true
  loading: false,
  user: null,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    createUser: (state, { payload }: PayloadAction<{ token: string }>) => {
      localStorage.setItem('token', payload.token);

      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    },
  },
});

export const { createUser } = signupSlice.actions;
export default signupSlice.reducer;

export const userSelector = (state: { signup: SignupState }) => state.signup;

export interface User {
  name: string;
  email: string;
  password: string;
}

export const signUpUser = ({ name, email, password }: User): AppThunk => async (
  dispatch
) => {
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
