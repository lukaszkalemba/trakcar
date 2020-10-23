import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { AppThunk } from 'components/app/App';

export interface Alert {
  id: string;
  message: string;
  alertType: 'success' | 'error';
}

const initialState: Alert[] = [];

const alertsSlice = createSlice({
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

export const { setAlert, unsetAlert } = alertsSlice.actions;
export default alertsSlice.reducer;

export const alertsSelector = (state: { alerts: Alert[] }) => state.alerts;

interface AlertProps {
  message: string;
  alertType: 'success' | 'error';
  timeout?: number;
}

export const showAlert = ({
  message,
  alertType,
  timeout = 2500,
}: AlertProps): AppThunk => async (dispatch) => {
  const id = uuidv4();

  dispatch(setAlert({ id, message, alertType }));
  setTimeout(() => dispatch(unsetAlert(id)), timeout);
};
