import { useState } from "react";
import { checkIfEmpty } from "../utils";

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (checkIfEmpty(email)){
      setErrorMsg('Email should not be empty');
      return;
    }
    if (checkIfEmpty(password)){
      setErrorMsg('Password should not be empty');
      return;
    }
    if (checkIfEmpty(confirmPassword)){
      setErrorMsg('Confirm password should not be empty');
      return;
    }

    setEmail('');
    setPassword('');
    setConfirmPassword('');
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
                    <label className="form-label FormCardBodyGroupTitle">E mail</label>
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
                    <label className="form-label FormCardBodyGroupTitle">Password</label>
                    <div className="d-flex FormCardBodyGroupInput rounded">
                      <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onInput={(e) => setPassword(e.target.value)}
                      className="form-control border-0"
                      />
                      <i className="fa-solid fa-eye d-flex align-items-center m-2" onClick={() => setShowPassword(!showPassword)}></i>
                    </div>
                  </div>
                  <div className="FormCardBodyGroup">
                    <label className="form-label FormCardBodyGroupTitle">Confirm Password</label>
                    <div className="d-flex FormCardBodyGroupInput rounded">
                      <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onInput={(e) => setConfirmPassword(e.target.value)}
                      className="form-control border-0"
                      />
                      <i className="fa-solid fa-eye d-flex align-items-center m-2" onClick={() => setShowConfirmPassword(!showPassword)}></i>
                    </div>
                  </div>
                  <button type="submit" onClick={handleRegister} className="btn btn-secondary FormCardBodyGroupButton m-auto">Register</button>
                </form>
                <p className="text-center">Already have an account? <a href="/">Login</a></p>
              </div>
            </div>
          </div>
      </div>
    </div> 
  )
}

export default Register;