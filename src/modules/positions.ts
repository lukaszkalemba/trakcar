import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootApi } from 'utils/api';
import { AppThunk } from 'components/app/App';
import { showAlert } from './alerts';

const initialState: any = {
  loading: true,
};

const positionsSlice = createSlice({
  name: 'positions',
  initialState,
  reducers: {
    setPositions: (state, { payload }: PayloadAction<{ data: any }>) => {
      return {
        ...state,
        positions: payload.data,
        loading: false,
      };
    },
  },
});

export const { setPositions } = positionsSlice.actions;
export default positionsSlice.reducer;

export const positionsSelector = (state: { positions: any }) => state.positions;

export const getAllPositions = (): AppThunk => async (dispatch) => {
  try {
    const res = await axios.get(`${rootApi}/api/v1/positions`);

    dispatch(setPositions(res.data));
  } catch (error) {
    dispatch(
      showAlert({ message: error.response.data.error, alertType: 'error' })
    );
  }
};
