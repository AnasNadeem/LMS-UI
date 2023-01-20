import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'

const user = JSON.parse(localStorage.getItem('user'));

export const baseAxios = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Authorization: user && user.is_active
      ? user.token
      : '',
    },
});

// User
export const getUser = () => baseAxios.get(`/user`);
export const createUser = (data) => baseAxios.post(`/user`, data);
export const login = (data) => baseAxios.post(`/user/login`, data);
export const forgetPassword = (data) => baseAxios.post(`/user/forget_password`, data);
export const tokenLogin = (data) => baseAxios.post(`/user/token_login`, data);
export const verifyOtp = (data) => baseAxios.post(`/user/verify_otp`, data);
export const passwordChange = (data) => baseAxios.post(`/user/password_change`, data);

// Account
export const getIdAccount = (accountId) => baseAxios.get(`/account/${accountId}`);
export const getAccount = () => baseAxios.get(`/account`);
export const createAccount = (data) => baseAxios.post(`/account`, data);
export const updateAccount = (accountId, data) => baseAxios.post(`/account/${accountId}`, data);
export const downloadCsv = () => baseAxios.get(`/account/download_csv`);

// Lead Attribute
export const getIdLeadAttr = (leadAttrId) => baseAxios.get(`/leadattribute/${leadAttrId}`);
export const getLeadAttr = () => baseAxios.get(`/leadattribute`);
export const createLeadAttr = (data) => baseAxios.post(`/leadattribute`, data);
export const updateLeadAttr = (leadAttrId, data) => baseAxios.put(`/leadattribute/${leadAttrId}`, data);
export const deleteLeadAttr = (leadAttrId) => baseAxios.delete(`/leadattribute/${leadAttrId}`);

// Lead
export const getIdLead = (leadId) => baseAxios.get(`/lead/${leadId}`);
export const getLead = () => baseAxios.get(`/lead`);
export const createLead = (data) => baseAxios.post(`/lead`, data);
export const deleteLead = (leadId) => baseAxios.delete(`/lead/${leadId}`);
