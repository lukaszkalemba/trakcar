import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootApi } from 'utils/api';
import { AppThunk } from 'components/app/App';
import { showAlert } from './alerts';
import { loadUserData } from './users';

export interface Member {
  name: string;
  email: string;
  avatar: string;
}

export interface OrganizationData {
  id: string;
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
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: payload,
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
  setLoading,
  setOrganization,
  unsetOrganization,
} = organizationsSlice.actions;
export default organizationsSlice.reducer;

export const organizationsSelector = (state: { organizations: Organization }) =>
  state.organizations;

export const updateLoading = (loadingStatus: boolean): AppThunk => async (
  dispatch
) => {
  dispatch(setLoading(loadingStatus));
};

export const loadOrganizationData = (): AppThunk => async (dispatch) => {
  try {
    const res = await axios.get(`${rootApi}/api/v1/organizations`);

    dispatch(setOrganization(res.data));
  } catch (error) {
    dispatch(updateLoading(false));
  }
};

export interface CreateOrganizationValues {
  name: string;
  accessCode: string;
}

export const createOrganization = (
  { name, accessCode }: CreateOrganizationValues,
  closeModal: () => void
): AppThunk => async (dispatch) => {
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

    dispatch(
      showAlert({
        message: 'Organization created',
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
