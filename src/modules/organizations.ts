import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootApi } from 'utils/api';
import { AppThunk } from 'components/app/App';
import { showAlert } from './alerts';

export interface Member {
  name: string;
  email: string;
  avatar: string;
}

interface OrganizationData {
  name: string;
  members: Member[];
  admin: string;
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
    getOrganizationData: (
      state,
      { payload }: PayloadAction<{ data: OrganizationData }>
    ) => {
      return {
        ...state,
        organization: payload.data,
        loading: false,
      };
    },
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
    unsetOrganization: (state) => {
      return {
        ...state,
        organization: null,
        loading: true,
      };
    },
  },
});

export const {
  getOrganizationData,
  setOrganization,
  unsetOrganization,
} = organizationsSlice.actions;
export default organizationsSlice.reducer;

export const organizationsSelector = (state: { organizations: Organization }) =>
  state.organizations;

export interface CreateOrganizationValues {
  name: string;
  accessCode: string;
}

export const loadOrganizationData = (): AppThunk => async (dispatch) => {
  const res = await axios.get(`${rootApi}/api/v1/organizations`);

  dispatch(getOrganizationData(res.data));
};

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