import axios from 'axios';
import { API_URL } from '../utils/config/app.config';
import { getApi, postApi } from './api.utils';
import { urlConfig } from '../utils/constants';

export const register = async (payload) => {
  try {
      const res = await postApi(`${API_URL}/${urlConfig.register}`, payload);
      return res;
  } catch (err) {
      console.error(err)
      return err.response;
  }
}

export const login = async (payload) => {
  try {
      const res = await postApi(`${API_URL}/${urlConfig.login}`, payload);
      return res;
  } catch (err) {
      console.error(err)
      return err.response;
  }
}

export const logout = async (payload) => {
  try {
      const res = await postApi(`${API_URL}/${urlConfig.logout}`, payload);
      return res;
  } catch (err) {
      console.error(err)
      return err.response;
  }

}
export const changePassword = async (payload) => {
  try {
      const res = await postApi(`${API_URL}/${urlConfig.changePassword}`, payload);
      if (res.status === 'success') {
        return true;
      }
      return false;
  } catch (err) {
      console.error(err)
      return false;
  }
}
export const authUser = async (payload) => {
  try {
      const res = await postApi(`${API_URL}/${urlConfig.authUser}`, payload);
      return res;
  } catch (err) {
      console.error(err)
      return err.response;
  }
}

export const requestVerificationCode = async (payload) => {
  try {
      const res = await postApi(`${API_URL}/${urlConfig.requestVerificationCode}`, payload);
      return res;
  } catch (err) {
      console.error(err)
      return err.response;
  }
}

export const confirmVerificationCode = async (payload) => {
  try {
      const res = await postApi(`${API_URL}/${urlConfig.confirmVerificationCode}`, payload);
      return res;
  } catch (err) {
      console.error(err)
      return err.response;
  }
}

export const getTransactionHistory = async (userId) => {
  try {
      const res = await getApi(`${API_URL}/${urlConfig.getTransactionHistory}/${userId}`);
      if (res.status === 'success') {
        return res.data;
      }
      return [];
  } catch (err) {
      console.error(err)
      return err.response;
  }

}

export const createTransactionActivity = async (payload) => {
  try {
      const res = await postApi(`${API_URL}/${urlConfig.createTransactionActivity}`, payload);
      if (res.status === 'success') {
        return true;
      }
      return false;
  } catch (err) {
      console.error(err)
      return false;
  }
}
