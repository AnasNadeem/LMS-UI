import { useState } from "react";
import { createAccount } from "../api";
import { checkIfEmpty } from "../utils";

const Account = () => {
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleAccount = async (e) => {
    e.preventDefault();
    if (checkIfEmpty(name)){
      setErrorMsg('Account name should not be empty');
      return;
    }

    const accountData = {
      "name": name
    }

    try{
      const resp = await createAccount(accountData);
      localStorage.setItem('account', JSON.stringify(resp.data));
      document.location = '/leadstructure';
    } catch(err){
      let errorMsg = '';
      for (const [key, value] of Object.entries(err.response.data)) {
        errorMsg += `${key.toUpperCase()}: ${value}`;
      }
      setErrorMsg(errorMsg);
      return;
    }

    setName('');
  }

  return (
    <div className="container">
        <div className="card card-body leadFormCard">
            {errorMsg &&
                <div className="FormCardBodyGroup alert alert-danger" role="alert">
                {errorMsg}
                </div>
            }
            <div className="FormCardBodyGroup">
                <label htmlFor="accountName" className="form-label FormCardBodyGroupTitle">Account Name</label>
                <div className="d-flex FormCardBodyGroupInput rounded">
                    <input
                    type="text"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                    className="form-control border-0"
                    id="accountName"
                    />
                </div>
            </div>
            <button className="btn btn-primary FormCardBodyGroupButton" onClick={handleAccount}>Create Account</button>
        </div>
    </div>
  )
}

export default Account;