import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import { AppThunk } from 'components/app/App';

export interface CalendarDates {
  selectedDate: string;
}

const initialState: CalendarDates = {
  selectedDate: format(new Date(), 'yyyy-MM-dd'),
};

const calendarDatesSlice = createSlice({
  name: 'calendar-dates',
  initialState,
  reducers: {
    setDate: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        selectedDate: payload,
      };
    },
    unsetDate: (state) => {
      return {
        ...state,
        selectedDate: format(new Date(), 'yyyy-MM-dd'),
      };
    },
  },
});

export const { setDate, unsetDate } = calendarDatesSlice.actions;
export default calendarDatesSlice.reducer;

export const calendarDatesSelector = (state: {
  calendarDates: CalendarDates;
}) => state.calendarDates;

export const updateSelectedDate = (
  date: Date,
  closeModal?: () => void
): AppThunk => async (dispatch) => {
  const formattedDate = format(date, 'yyyy-MM-dd');

  dispatch(setDate(formattedDate));

  if (closeModal) {
    closeModal();
  }
};
