const Register = () => {
  return (
    <div className="container">
      <div className="row">
          <div className="col-lg-5 offset-7">
            <div className="card FormCard">
                <div className="card-body FormCardBody">
                    <form>
                        <div className="FormCardBodyGroup">
                          <label htmlFor="email" className="form-label FormCardBodyGroupTitle">E mail</label>
                          <div className="d-flex FormCardBodyGroupInput rounded">
                            <input type="email" className="form-control border-0" id="email" />
                            <i className="fa-solid fa-envelope d-flex align-items-center m-1"></i>
                          </div>
                        </div>
                        <div className="FormCardBodyGroup">
                          <label htmlFor="password" className="form-label FormCardBodyGroupTitle">Password</label>
                          <div className="d-flex FormCardBodyGroupInput rounded">
                            <input type="password" className="form-control border-0" id="password" />
                            <i className="fa-solid fa-eye d-flex align-items-center m-1"></i>
                          </div>
                        </div>
                        <div className="FormCardBodyGroup">
                          <label htmlFor="password" className="form-label FormCardBodyGroupTitle">Confirm Password</label>
                          <div className="d-flex FormCardBodyGroupInput rounded">
                            <input type="password" className="form-control border-0" id="password" />
                            <i className="fa-solid fa-eye d-flex align-items-center m-1"></i>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-secondary FormCardBodyGroupButton m-auto">Signup</button>
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