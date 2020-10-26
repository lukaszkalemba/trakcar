import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootApi } from 'utils/api';
import { AppThunk } from 'components/app/App';
import { showAlert } from './alerts';

interface OrganizationData {
  _id: string;
  name: string;
  accessCode: string;
  members: string[];
  admin: string;
  positions: string[];
}

export interface Organization {
  organization: OrganizationData | null;
  loading: boolean;
}

const initialState: Organization = {
  organization: null,
  loading: true,
};

const organizationsSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    setOrganization: (
      state,
      { payload }: PayloadAction<{ data: OrganizationData }>
    ) => {
      return {
        ...state,
        organization: payload.data,
        loading: false,
      };
    },
  },
});

export const { setOrganization } = organizationsSlice.actions;
export default organizationsSlice.reducer;

export interface CreateOrganizationValues {
  name: string;
  accessCode: string;
}

export const createOrganization = ({
  name,
  accessCode,
}: CreateOrganizationValues): AppThunk => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, accessCode });

  try {
    const res = await axios.post(
      `${rootApi}/api/v1/organizations`,
      body,
      config
    );

    dispatch(setOrganization(res.data));
  } catch (error) {
    dispatch(
      showAlert({ message: error.response.data.error, alertType: 'error' })
    );
  }
};
