import axios from '../axios';

const baseUrl = 'http://127.0.0.1:8000'

// User
export const getUser = () => axios.get(`${baseUrl}/user`);
export const createUser = (data) => axios.post(`${baseUrl}/user`, data);
export const login = (data) => axios.post(`${baseUrl}/user/login`, data);
export const forgetPassword = (data) => axios.post('/user/forget_password', data);
export const tokenLogin = (data) => axios.post('/user/token_login', data);
export const verifyOtp = (data) => axios.post('/user/verify_otp', data);
export const passwordChange = (data) => axios.post('/user/password_change', data);


// Account
export const getMyAccount = (accountId) => axios.get(`/account/${accountId}`);
export const createAccount = (data) => axios.post('/account', data);
export const updateAccount = (accountId, data) => axios.post(`/account/${accountId}`, data);
export const downloadCsv = () => axios.get('/account/download_csv');
