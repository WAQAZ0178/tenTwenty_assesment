import axios from 'axios';
const baseUrl = 'https://api.themoviedb.org/3/account/20070342/';
const getUrl = rel => `${baseUrl}${rel}`;

const getDataWithRefreshToken = async (relativeUrl, token) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: 'get',
    url: url,
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'cateringApp-customer-auth-refresh-token': `${token}`,
    },
  };

  const response = await axios(config)
    .then(res => res)
    .catch(error => {
      return error;
    });
  return response;
};

const getDataWithAccessToken = async relativeUrl => {
  const url = getUrl(relativeUrl);
  const config = {
    method: 'GET',
    url: url,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjdjMGUyZDUyNmFkNDZmOTEyOTkyNThjYTg1NzM4ZCIsInN1YiI6IjY0OWE3OWE1Mjk3NWNhMDEyNTRiMjBjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JDMQN7NG5R9Lq6whQAE2V4juW_cFI2-h-JMTWpkX93w',
    },
  };

  const response = await axios(config)
    .then(res => res)
    .catch(error => {
      return error;
    });
  return response;
};

const postDataWithoutID = async (relativeUrl, data) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: 'POST',
    url: url,
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };
  let response;
  await axios(config)
    .then(res => {
      response = res;
    })
    .catch(error => {
      console.log('error', error);
      response = error;
    });
  return response;
};

const postDataWithParams = async (relativeUrl, token) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: 'POST',
    url: url,
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  let response;
  await axios(config)
    .then(res => {
      response = res;
    })
    .catch(error => {
      response = error;
    });
  return response;
};
const postDataWitID = async (relativeUrl, token, data) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: 'POST',
    url: url,
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  let response;
  await axios(config)
    .then(res => {
      response = res;
    })
    .catch(error => {
      response = error;
    });
  return response;
};
const getDataWithBody = async (relativeUrl, token, data) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: 'get',
    url: url,
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'cateringApp-customer-auth-refresh-token': `${token}`,
    },
    data: data,
  };

  const response = await axios(config)
    .then(res => res)
    .catch(error => {
      return error;
    });
  return response;
};

export default API = {
  postDataWithoutID,
  postDataWitID,
  postDataWithParams,
  getDataWithRefreshToken,
  getDataWithAccessToken,
  getDataWithBody,
};
