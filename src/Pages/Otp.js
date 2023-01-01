import React from 'react'

const Otp = () => {
  return (
    <div className="container">
      <div className="row">
          <div className="col-lg-5 offset-7">
            <div className="card FormCard">
                <div className="card-body FormCardBody">
                    <form>
                        <div className="FormCardBodyGroup">
                          <label htmlFor="otp" className="form-label FormCardBodyGroupTitle">Otp</label>
                          <div className="d-flex FormCardBodyGroupInput rounded">
                            <input type="text" className="form-control border-0" id="otp" />
                          </div>
                            <h6 className="text-end">Resent OTP</h6>
                        </div>
                        <button type="submit" className="btn btn-secondary FormCardBodyGroupButton m-auto">Verify Otp</button>
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