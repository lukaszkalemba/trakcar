import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { AppThunk } from 'components/app/App';

interface Alert {
  id: string;
  message: string;
  alertType: 'success' | 'error';
}

const initialState: Alert[] = [];

const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setAlert: (state, { payload }: PayloadAction<Alert>) => {
      return [...state, payload];
    },
    unsetAlert: (state, { payload }: PayloadAction<string>) => {
      return state.filter((alert: Alert) => alert.id !== payload);
    },
  },
});

export const { setAlert, unsetAlert } = alertSlice.actions;
export default alertSlice.reducer;

export const showAlert = ({
  message,
  alertType,
  timeout = 5000,
}: any): AppThunk => async (dispatch) => {
  const id = uuidv4();

  dispatch(setAlert({ id, message, alertType }));
  setTimeout(() => dispatch(unsetAlert(id)), timeout);
};
