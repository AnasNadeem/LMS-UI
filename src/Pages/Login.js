import { useState } from "react";
import { getAccount, login } from "../api";
import { checkIfEmpty, logout } from "../utils";
import { baseAxios } from "../api";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchAccount = async () => {
    try{
      const accountResp = await getAccount();
      if (accountResp.data.length > 0){
        localStorage.setItem('account', JSON.stringify(accountResp.data));
        document.location = '/leadstructure';
      }else{
        document.location = '/account';
      }
    } catch(err){
      logout();
    }
  }

  if (localStorage.getItem('user')){
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.is_active){
      baseAxios.defaults.headers.Authorization = `${user.token}`;
      fetchAccount();
    } else{
      document.location = '/otp';
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if (checkIfEmpty(email)){
      setErrorMsg('Email should not be empty');
      return;
    }
    if (checkIfEmpty(password)){
      setErrorMsg('Password should not be empty');
      return;
    }

    const loginData = {
      "email": email,
      "password": password
    }

    try{
      const resp = await login(loginData);
      localStorage.setItem('user', JSON.stringify(resp.data));
      if (resp.data.is_active){
        baseAxios.defaults.headers.Authorization = `${resp.data.token}`;
        fetchAccount();
      } else{
        document.location = '/otp';
      }
    } catch(err){
      let errorMsg = '';
      for (const [key, value] of Object.entries(err.response.data)) {
        errorMsg += `${key.toUpperCase()}: ${value}`;
      }
      setErrorMsg(errorMsg);
      return;
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className="container">
      <div className="row">
          <div className="col-lg-5 offset-7">
            <div className="card FormCard">
              <div className="card-body FormCardBody">
                {errorMsg &&
                  <div className="FormCardBodyGroup alert alert-danger" role="alert">
                    {errorMsg}
                  </div>
                }
                <form>
                  <div className="FormCardBodyGroup">
                    <label htmlFor="email" className="form-label FormCardBodyGroupTitle">E mail</label>
                    <div className="d-flex FormCardBodyGroupInput rounded">
                      <input
                      type="email"
                      value={email}
                      onInput={(e) => setEmail(e.target.value)}
                      className="form-control border-0"
                      />
                      <i className="fa-solid fa-envelope d-flex align-items-center m-2"></i>
                    </div>
                  </div>
                  <div className="FormCardBodyGroup">
                    <label htmlFor="password" className="form-label FormCardBodyGroupTitle">Password</label>
                    <div className="d-flex FormCardBodyGroupInput rounded">
                      <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onInput={(e) => setPassword(e.target.value)}
                      className="form-control border-0"
                      />
                      <i className="fa-solid fa-eye d-flex align-items-center m-2" onClick={() => setShowPassword(!showPassword)}></i>
                    </div>
                    <h6 className="text-end">Forget Password</h6>
                  </div>
                  <button type="submit" onClick={handleLogin} className="btn btn-secondary FormCardBodyGroupButton m-auto">Login</button>
                </form>
                  <p className="text-center">Don't have an account? <a href="/register">Register</a></p>
              </div>
            </div>
          </div>
      </div>
    </div> 
  )
}

export default Login;