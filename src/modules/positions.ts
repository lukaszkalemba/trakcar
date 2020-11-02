import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootApi } from 'utils/api';
import { AppThunk } from 'components/app/App';

export interface PositionData {
  _id: string;
  name: string;
  startTime: string;
  endTime: string;
  orders: any[];
  organization: string;
}

interface Positons {
  positions: PositionData[] | null;
  loading: boolean;
}

const initialState: Positons = {
  positions: null,
  loading: true,
};

const positionsSlice = createSlice({
  name: 'positions',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: payload,
      };
    },
    setPositions: (
      state,
      { payload }: PayloadAction<{ data: PositionData[] }>
    ) => {
      return {
        ...state,
        positions: payload.data,
        loading: false,
      };
    },
  },
});

export const { setLoading, setPositions } = positionsSlice.actions;
export default positionsSlice.reducer;

export const positionsSelector = (state: { positions: Positons }) =>
  state.positions;

export const updateLoading = (loadingStatus: boolean): AppThunk => async (
  dispatch
) => {
  dispatch(setLoading(loadingStatus));
};

export const getAllPositions = (): AppThunk => async (dispatch) => {
  try {
    const res = await axios.get(`${rootApi}/api/v1/positions`);

    dispatch(setPositions(res.data));
  } catch (error) {
    dispatch(setLoading(false));
  }
};
