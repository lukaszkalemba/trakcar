import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootApi } from 'utils/api';
import { setAuthToken } from 'helpers/setAuthToken';
import { AppThunk } from 'utils/store';
import { unsetOrganization } from './organizations';
import { getAllPositions, unsetPositions } from './positions';
import { getAllOrders, unsetOrders } from './orders';
import { unsetDate } from './calendar-dates';
import { showAlert } from './alerts';

interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  date: string;
  organization?: string;
}

export interface UsersState {
  token: string | null;
  user: User | null;
  loading: boolean;
}

const initialState: UsersState = {
  token: localStorage.getItem('token'),
  user: null,
  loading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: payload,
      };
    },
    getUser: (state, { payload }: PayloadAction<{ data: User }>) => {
      return {
        ...state,
        user: payload.data,
        loading: false,
      };
    },
    setUser: (state, { payload }: PayloadAction<{ data: string }>) => {
      localStorage.setItem('token', payload.data);

      return {
        ...state,
        token: payload.data,
      };
    },
    unsetUser: (state) => {
      localStorage.removeItem('token');

      return {
        ...state,
        token: null,
        user: null,
        loading: false,
      };
    },
  },
});

export const { setLoading, getUser, setUser, unsetUser } = usersSlice.actions;
export default usersSlice.reducer;

export const usersSelector = (state: { users: UsersState }) => state.users;

export const loadUserData = (): AppThunk => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${rootApi}/api/v1/users`);

    dispatch(getUser(res.data));
    dispatch(getAllPositions());
    dispatch(getAllOrders());
  } catch (error) {
    dispatch(
      showAlert({ message: error.response.data.error, alertType: 'error' })
    );
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
    dispatch(setLoading(true));

    const res = await axios.post(`${rootApi}/api/v1/users/login`, body, config);

    dispatch(setUser(res.data));
  } catch (error) {
    dispatch(setLoading(false));

    dispatch(
      showAlert({ message: error.response.data.error, alertType: 'error' })
    );
  }
};

export const signOutUser = (
  redirect: (path: string) => void
): AppThunk => async (dispatch) => {
  dispatch(unsetUser());
  dispatch(unsetOrganization());
  dispatch(unsetPositions());
  dispatch(unsetOrders());
  dispatch(unsetDate());

  redirect('/');
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
    dispatch(setLoading(true));

    const res = await axios.post(`${rootApi}/api/v1/users`, body, config);

    dispatch(setUser(res.data));
  } catch (error) {
    dispatch(setLoading(false));

    dispatch(
      showAlert({ message: error.response.data.error, alertType: 'error' })
    );
  }
};
