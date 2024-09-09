import axios from 'axios';
import { HTTPCode } from '../constants/constants';

/* Common Method for API calls */
const getAccessToken = () => {
  let accessToken = ''
  try {
      const storage = localStorage.getItem("accessToken")
      if (storage) {
          accessToken = JSON.parse(storage)?.accessToken?.token
      }
  }
  catch (e) {
      let message = e.message;
      console.log(`Error on getAccessToken ${message}`);
  }
  return accessToken
}
export const getApi = async (url, headers) => {
    let status = 'error';
    let message = '';
    let data = null;
    try {
        let headerObj = {
            Authorization: `Bearer ${getAccessToken()}`,
            ...headers
        }
        const res = await axios.get(`${url}`, {
            headers: headerObj
        })
        if (res.status === HTTPCode.SUCCESSFUL) {
            let apiResponse = res.data;
            if(apiResponse.status) {
                data = apiResponse.data;
                status = "success";
                message = apiResponse.message;
            } else {
                message = apiResponse.message;
            }
        }
    } catch (e) {
      message = e.message;
      if (e?.response?.status === HTTPCode.UNAUTHORIZED) {
          status = 'unauthorized';
      }
      if (e?.response?.data?.message) {
          message = e?.response?.data?.message
      }
    }
    return { status, message, data };
}

export const postApi = async (url, payload, headers) => {
    let status = 'error';
    let message = '';
    let data = null;
    try {
        let headerObj = {
            Authorization: `Bearer ${getAccessToken()}`,
            ...headers
        }
        const res = await axios.post(`${url}`, payload, {
            headers: headerObj
        })
        if (res.status === HTTPCode.SUCCESSFUL) {
            let apiResponse = res.data;
            if(apiResponse.status) {
                data = apiResponse.data;
                status = "success";
                message = apiResponse.message;
            } else {
                message = apiResponse.message;
            }
        }
    } catch (e) {
        message = e.message;
        if (e?.response?.status === HTTPCode.UNAUTHORIZED) {
            status = 'unauthorized';
        }
        if (e?.response?.data?.message) {
            message = e?.response?.data?.message
        }
    }
    return { status, message, data };
}

export const fetchPost = (url, payload) => {
    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify(payload),
        keepalive: true,
    });
}