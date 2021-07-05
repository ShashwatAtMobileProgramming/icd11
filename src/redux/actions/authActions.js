import {GET_TOKEN} from '../../config/urls';
import {apiPost, apiGet} from '../../utils/Utils';
import {clickdiseases} from '../../Screens/Subcatone/Subcatone';
import store from '../store';
import types from '../types';

console.log(clickdiseases, 'cjeck urlllllllllllllllllllllllllllllllllllll');
const {dispatch} = store;
export function UserData(data) {
  console.log(data, 'token at authactions');
  dispatch({
    type: types.LOGGEDIN,
    payload: data,
  });
}

export function mainlistingdiseases(data = {}, headers = {}) {
  console.log(GET_TOKEN, 'compare token');
  return new Promise((resolve, reject) => {
    apiPost(GET_TOKEN, data, headers)
      .then(res => {
        resolve(res);
        console.log(res, 'response');
      })
      .catch(error => {
        reject(error);
        console.log(error, 'Error');
      });
  });
}

export function mainlistingdiseasescheck(newurl, data = {}, headers = {}) {
  console.log(newurl, 'compare token');
  return new Promise((resolve, reject) => {
    apiGet(newurl, data, headers)
      .then(res => {
        resolve(res);
        console.log(res, 'response');
      })
      .catch(error => {
        reject(error);
        console.log(error, 'Error');
      });
  });
}

export function mainlistingdiseasescheckSearch(newurl, data = {}, headers = {}) {
  console.log(newurl, 'compare token');
  return new Promise((resolve, reject) => {
    apiPost(newurl, data, headers)
      .then(res => {
        resolve(res);
        console.log(res, 'response');
      })
      .catch(error => {
        reject(error);
        console.log(error, 'Error');
      });
  });
}

export function ondiseasesone(endPoint, data = {}, headers = {}) {
  console.log(endPoint, 'id at authactions');
  console.log(headers, 'headers at authactions');
  return new Promise((resolve, reject) => {
    apiGet(endPoint, data, headers)
      .then(res => {
        resolve(res);
        console.log(res, 'response of subcategory dograaaaa');
      })
      .catch(error => {
        reject(error);
        console.log(error, 'Error');
      });
  });
}

export function ondiseasestwo(endPoint, data = {}, headers = {}) {
  console.log(endPoint, 'id at authactions');
  console.log(headers, 'headers at authactions');
  return new Promise((resolve, reject) => {
    apiGet(endPoint, data, headers)
      .then(res => {
        resolve(res);
        console.log(res, 'response of subcategorytwo dograaaaa');
      })
      .catch(error => {
        reject(error);
        console.log(error, 'Error');
      });
  });
}
export function ondiseasesthree(endPoint, data = {}, headers = {}) {
  console.log(endPoint, 'id at authactions');
  console.log(headers, 'headers at authactions');
  return new Promise((resolve, reject) => {
    apiGet(endPoint, data, headers)
      .then(res => {
        resolve(res);
        console.log(res, 'response of subcategorytwo dograaaaa');
      })
      .catch(error => {
        reject(error);
        console.log(error, 'Error');
      });
  });
}

export function ondiseasesfour(endPoint, data = {}, headers = {}) {
  console.log(endPoint, 'id at authactions');
  console.log(headers, 'headers at authactions');
  return new Promise((resolve, reject) => {
    apiGet(endPoint, data, headers)
      .then(res => {
        resolve(res);
        console.log(res, 'response of subcategorytwo dograaaaa');
      })
      .catch(error => {
        reject(error);
        console.log(error, 'Error');
      });
  });
}

export function ondiseasesfive(endPoint, data = {}, headers = {}) {
  console.log(endPoint, 'id at authactions');
  console.log(headers, 'headers at authactions');
  return new Promise((resolve, reject) => {
    apiGet(endPoint, data, headers)
      .then(res => {
        resolve(res);
        console.log(res, 'response of subcategorytwo dograaaaa');
      })
      .catch(error => {
        reject(error);
        console.log(error, 'Error');
      });
  });
}
