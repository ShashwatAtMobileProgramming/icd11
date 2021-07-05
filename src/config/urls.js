export const API_BASE_URL = 'https://icdaccessmanagement.who.int';
export const getApiUrl = endpoint => API_BASE_URL + endpoint;
export const GET_TOKEN = getApiUrl('/connect/token');
export const ON_DISEASES_ONE = getApiUrl();

//  directly after token

// export const API_BASE_URL = 'https://id.who.int/icd';
// export const getApiUrl = endpoint => API_BASE_URL + endpoint;
// export const GET_TOKEN = getApiUrl('/entity/455013390');
// export const ON_DISEASES_ONE = getApiUrl();
// https://id.who.int/icd/entity/455013390
