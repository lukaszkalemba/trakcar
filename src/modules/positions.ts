import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootApi } from 'utils/api';
import { AppThunk } from 'components/app/App';
import { showAlert } from './alerts';

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
    unsetSinglePosition: (state, { payload }: PayloadAction<string>) => {
      const { positions } = state;

      return {
        ...state,
        positions: (positions as PositionData[]).filter(
          ({ _id }) => _id !== payload
        ),
      };
    },
  },
});

export const {
  setLoading,
  setPositions,
  unsetSinglePosition,
} = positionsSlice.actions;
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

export const deletePosition = (id: string): AppThunk => async (dispatch) => {
  try {
    await axios.delete(`${rootApi}/api/v1/positions/${id}`);

    dispatch(unsetSinglePosition(id));
    dispatch(getAllPositions());
  } catch (error) {
    dispatch(
      showAlert({ message: error.response.data.error, alertType: 'error' })
    );
  }
};
