import { useState } from "react";
import { verifyOtp } from "../api";
import { checkIfEmpty } from "../utils";

const Otp = () => {
  const [otp, setOtp] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  if (!localStorage.getItem('user')){
    document.location = '/register';
  }
  const user = JSON.parse(localStorage.getItem('user'));

  const handleOtp = async (e) => {
    e.preventDefault();
    if (checkIfEmpty(otp)){
      setErrorMsg('Otp should not be empty');
      return;
    }
    const otpData = {
      'email': user.email,
      'otp': otp.trim()
    }

    try{
      const resp = await verifyOtp(otpData);
      localStorage.setItem('user', JSON.stringify(resp.data));
      document.location = '/account';
    } catch(err){
      let errorMsg = '';
      for (const [key, value] of Object.entries(err.response.data)) {
        errorMsg += `${key.toUpperCase()}: ${value}`;
      }
      setErrorMsg(errorMsg);
      return;
    }
    setOtp('');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 offset-7">
          <div className="card FormCard">
            <div className="card-body FormCardBody">
              {errorMsg ?
                <div className="FormCardBodyGroup alert alert-danger" role="alert">
                  {errorMsg}
                </div> :
                <div className="FormCardBodyGroup alert alert-success" role="alert">
                  Registered successfully. <br />
                  {user.message}
                </div>
              }
              <form>
                <div className="FormCardBodyGroup">
                  <label htmlFor="otp" className="form-label FormCardBodyGroupTitle">Otp</label>
                  <div className="d-flex FormCardBodyGroupInput rounded">
                    <input
                    type="text"
                    value={otp}
                    onInput={(e) => setOtp(e.target.value)}
                    className="form-control border-0"
                    id="otp" />
                  </div>
                    <h6 className="text-end">Resent OTP</h6>
                </div>
                <button type="submit" onClick={handleOtp} className="btn btn-secondary FormCardBodyGroupButton m-auto">Verify Otp</button>
              </form>
              <p className="text-center">Incorrect email? <a href="/register">Register</a> again</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Otp