import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootApi } from 'utils/api';
import { AppThunk } from 'utils/store';
import { showAlert } from './alerts';

export interface Order {
  _id: string;
  name: string;
  principalName: string;
  carBrand: string;
  carModel: string;
  positionId: string;
  date: string;
  endTime: string;
  startTime: string;
  color: number;
  cost: number;
  description: string;
}

export interface OrdersState {
  orders: Order[];
  loading: boolean;
}

const initialState: OrdersState = {
  orders: [],
  loading: true,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: payload,
      };
    },
    setOrders: (state, { payload }: PayloadAction<{ data: Order[] }>) => {
      return {
        ...state,
        orders: payload.data,
        loading: false,
      };
    },
  },
});

export const { setLoading, setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;

export const ordersSelector = (state: { orders: OrdersState }) => state.orders;

export const updateLoading = (loadingStatus: boolean): AppThunk => async (
  dispatch
) => {
  dispatch(setLoading(loadingStatus));
};

export const getAllOrders = (): AppThunk => async (dispatch) => {
  try {
    const res = await axios.get(`${rootApi}/api/v1/orders`);

    dispatch(setOrders(res.data));
  } catch (error) {
    dispatch(updateLoading(false));
  }
};

export interface CreateOrderValues {
  name: string;
  principalName: string;
  carBrand: string;
  carModel: string;
  positionId: string;
  date: string;
  endTime: string;
  startTime: string;
  color: number;
  cost: number;
  description: string;
}

export const createOrder = (
  {
    name,
    principalName,
    carBrand,
    carModel,
    positionId,
    date,
    endTime,
    startTime,
    color,
    cost,
    description,
  }: CreateOrderValues,
  closeModal: () => void
): AppThunk => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    name,
    principalName,
    carBrand,
    carModel,
    positionId,
    date,
    endTime,
    startTime,
    color,
    cost,
    description,
  });

  try {
    await axios.post(`${rootApi}/api/v1/orders`, body, config);

    dispatch(getAllOrders());

    dispatch(
      showAlert({
        message: 'Order created',
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
