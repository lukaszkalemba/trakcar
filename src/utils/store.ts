import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import usersReducer, { UsersState } from 'modules/users';
import organizationsReducer, { OrganizationState } from 'modules/organizations';
import positionsReducer, { PositionsState } from 'modules/positions';
import ordersReducer, { OrdersState } from 'modules/orders';
import alertsReducer, { Alert } from 'modules/alerts';
import calendarDatesReducer, {
  CalendarDatesState,
} from 'modules/calendar-dates';

interface StateSchema {
  users: UsersState;
  organizations: OrganizationState;
  positions: PositionsState;
  orders: OrdersState;
  calendarDates: CalendarDatesState;
  alerts: Alert[];
}

export type AppThunk = ThunkAction<void, StateSchema, unknown, Action<string>>;

export const store = configureStore({
  reducer: {
    users: usersReducer,
    organizations: organizationsReducer,
    positions: positionsReducer,
    orders: ordersReducer,
    calendarDates: calendarDatesReducer,
    alerts: alertsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
