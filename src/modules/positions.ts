import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootApi } from 'utils/api';
import { AppThunk } from 'components/app/App';
import { showAlert } from './alerts';
import { loadUserData } from './users';

export interface PositionData {
  _id: string;
  name: string;
  startTime: string;
  endTime: string;
  orders: any[];
  organization: string;
}

export interface Positions {
  positions: PositionData[] | null;
  loading: boolean;
}

const initialState: Positions = {
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

export const positionsSelector = (state: { positions: Positions }) =>
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
    dispatch(loadUserData());
  } catch (error) {
    dispatch(setLoading(false));
  }
};

export interface CreatePositionValues {
  name: string;
  startTime: string;
  endTime: string;
}

export const createPosition = (
  { name, startTime, endTime }: CreatePositionValues,
  closeModal: () => void
): AppThunk => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, startTime, endTime });

  try {
    await axios.post(`${rootApi}/api/v1/positions`, body, config);

    dispatch(getAllPositions());

    dispatch(
      showAlert({
        message: 'Position created',
        alertType: 'success',
      })
    );

    closeModal();
  } catch (error) {
    dispatch(
      showAlert({ message: error.response.data.error, alertType: 'error' })
    );
  }
};

export interface UpdatePositionValues extends CreatePositionValues {
  id: string;
}

export const updatePosition = (
  { id, name, startTime, endTime }: UpdatePositionValues,
  closeModal: () => void
): AppThunk => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, startTime, endTime });

  try {
    await axios.put(`${rootApi}/api/v1/positions/${id}`, body, config);

    dispatch(getAllPositions());
    dispatch(
      showAlert({
        message: 'Position updated',
        alertType: 'success',
      })
    );

    closeModal();
  } catch (error) {
    dispatch(
      showAlert({ message: error.response.data.error, alertType: 'error' })
    );
  }
};

export const deletePosition = (id: string): AppThunk => async (dispatch) => {
  try {
    await axios.delete(`${rootApi}/api/v1/positions/${id}`);

    dispatch(unsetSinglePosition(id));
    dispatch(getAllPositions());

    dispatch(
      showAlert({
        message: 'Position deleted',
        alertType: 'success',
      })
    );
  } catch (error) {
    dispatch(
      showAlert({ message: error.response.data.error, alertType: 'error' })
    );
  }
};
