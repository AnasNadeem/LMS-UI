import axios from '../axios';

// User
export const getUser = async () => axios.get('/user');
export const createUser = async (data) => axios.post('/user', data);
export const login = async (data) => axios.post('/user/login', data);
export const forgetPassword = async (data) => axios.post('/user/forget_password', data);
export const tokenLogin = async (data) => axios.post('/user/token_login', data);
export const verifyOtp = async (data) => axios.post('/user/verify_otp', data);
export const passwordChange = async (data) => axios.post('/user/password_change', data);


// Account
export const getMyAccount = async (accountId) => axios.get(`/account/${accountId}`);
export const createAccount = async (data) => axios.post('/account', data);
export const updateAccount = async (accountId, data) => axios.post(`/account/${accountId}`, data);
export const downloadCsv = async () => axios.get('/account/download_csv');
