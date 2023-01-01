import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'

// User
export const getUser = () => axios.get(`${baseUrl}/user`);
export const createUser = (data) => axios.post(`${baseUrl}/user`, data);
export const login = (data) => axios.post(`${baseUrl}/user/login`, data);
export const forgetPassword = (data) => axios.post(`${baseUrl}/user/forget_password`, data);
export const tokenLogin = (data) => axios.post(`${baseUrl}/user/token_login`, data);
export const verifyOtp = (data) => axios.post(`${baseUrl}/user/verify_otp`, data);
export const passwordChange = (data) => axios.post(`${baseUrl}/user/password_change`, data);

// Account
export const getMyAccount = (accountId) => axios.get(`${baseUrl}/account/${accountId}`);
export const createAccount = (data) => axios.post(`${baseUrl}/account`, data);
export const updateAccount = (accountId, data) => axios.post(`${baseUrl}/account/${accountId}`, data);
export const downloadCsv = () => axios.get(`${baseUrl}/account/download_csv`);
