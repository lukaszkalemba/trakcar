import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootApi } from 'utils/api';
import { AppThunk } from 'utils/store';
import { showAlert } from './alerts';
import { loadUserData } from './users';
import { setLoading as setPositionsLoading } from './positions';

export interface Member {
  name: string;
  email: string;
  avatar: string;
}

export interface Organization {
  id: string;
  organizationName: string;
  members: Member[];
  admin: string;
}

export interface OrganizationState {
  organization: Organization | null;
  loading: boolean;
}

const initialState: OrganizationState = {
  organization: null,
  loading: true,
};

const organizationsSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: payload,
      };
    },
    setOrganization: (
      state,
      { payload }: PayloadAction<{ data: Organization }>
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
  setLoading,
  setOrganization,
  unsetOrganization,
} = organizationsSlice.actions;
export default organizationsSlice.reducer;

export const organizationsSelector = (state: {
  organizations: OrganizationState;
}) => state.organizations;

export const loadOrganizationData = (): AppThunk => async (dispatch) => {
  try {
    const res = await axios.get(`${rootApi}/api/v1/organizations`);

    dispatch(setOrganization(res.data));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

export interface CreateOrganizationValues {
  organizationName: string;
  accessCode: string;
}

export const createOrganization = (
  { organizationName, accessCode }: CreateOrganizationValues,
  closeModal: () => void
): AppThunk => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ organizationName, accessCode });

  try {
    const res = await axios.post(
      `${rootApi}/api/v1/organizations`,
      body,
      config
    );

    dispatch(setOrganization(res.data));
    dispatch(loadUserData());
    dispatch(setPositionsLoading(true));

    dispatch(
      showAlert({
        message: 'Organization created',
        alertType: 'success',
      })
    );

    closeModal();
  } catch (error) {
    dispatch(
      showAlert({
        message: error.response.data.error,
        alertType: 'error',
        timeout: 5000,
      })
    );
  }
};

export interface JoinOrganizationValues {
  accessCode: string;
}

export const joinOrganization = (
  { accessCode }: JoinOrganizationValues,
  closeModal: () => void
): AppThunk => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ accessCode });

  try {
    await axios.post(`${rootApi}/api/v1/organizations/members`, body, config);

    dispatch(loadOrganizationData());
    dispatch(loadUserData());
    dispatch(setPositionsLoading(true));

    dispatch(
      showAlert({
        message: 'Organization joined',
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

export const deleteOrganization = (id: string): AppThunk => async (
  dispatch
) => {
  try {
    await axios.delete(`${rootApi}/api/v1/organizations/${id}`);

    dispatch(unsetOrganization());
    dispatch(loadOrganizationData());
    dispatch(loadUserData());

    dispatch(
      showAlert({
        message: 'Organization deleted',
        alertType: 'success',
      })
    );
  } catch (error) {
    dispatch(
      showAlert({ message: error.response.data.error, alertType: 'error' })
    );
  }
};
