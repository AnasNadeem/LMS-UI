import { useState } from "react";
import { createLeadAttr } from "../api";
import { checkIfEmpty } from "../utils";

const LeadAttrForm = () => {
    
  const [name, setName] = useState('');
  const [type, setType] = useState('main');
  const [choice, setChoice] = useState('string');
  // const [value, setValue] = useState(null);
  const [helpText, setHelpText] = useState('');

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLeadAttribute = async (e) => {
    e.preventDefault();
    if (checkIfEmpty(name)){
      setErrorMsg('Name should not be empty');
      return;
    }
    if (checkIfEmpty(type)){
      setErrorMsg('Type should not be empty');
      return;
    }
    if (checkIfEmpty(choice)){
      setErrorMsg('Choice should not be empty');
      return;
    }

    const account = JSON.parse(localStorage.getItem('account'));
    const leadAttrData = {
      "account": account.id,
      "name": name,
      "lead_type": type,
      "attribute_type": choice,
      "value": null,
      "help_text": helpText,
    }

    try{
      const resp = await createLeadAttr(leadAttrData);
      setSuccessMsg(`${name} created successfully`)
      console.log(resp.data)
    } catch(err){
      let errorMsg = '';
      for (const [key, value] of Object.entries(err.response.data)) {
        errorMsg += `${key.toUpperCase()}: ${value}`;
      }
      setErrorMsg(errorMsg);
      return;
    }

    setName('');
    setType('main');
    setChoice('string');
    setHelpText('');
    setErrorMsg('');
  }

  return (
    <form onSubmit={handleLeadAttribute}>
      <div className="card card-body leadFormCard">
          {successMsg &&
          <div className="FormCardBodyGroup alert alert-success" role="alert">
              {successMsg}
          </div>
          }
          {errorMsg &&
          <div className="FormCardBodyGroup alert alert-danger" role="alert">
              {errorMsg}
          </div>
          }
          <div className="row">
              <div className="col-3">
                  <div className="FormCardBodyGroup">
                  <label htmlFor="name" className="form-label FormCardBodyGroupTitle">Name</label>
                  <div className="d-flex FormCardBodyGroupInput rounded">
                      <input
                      type="text"
                      className="form-control border-0"
                      id="name"
                      value={name}
                      onInput={(e) => setName(e.target.value)}
                      />
                  </div>
                  </div>
              </div>
              <div className="col-3">
                  <div className="FormCardBodyGroup">
                  <label htmlFor="type" className="form-label FormCardBodyGroupTitle">Type</label>
                  <div className="d-flex FormCardBodyGroupInput rounded">
                      <select
                      className="form-select border-0"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      >
                        <option value="main">Main</option>
                        <option value="track">Track</option>
                        <option value="post">Post</option>
                      </select>
                  </div>
                  </div>
              </div>
              <div className="col-3">
                  <div className="FormCardBodyGroup">
                  <label htmlFor="choice" className="form-label FormCardBodyGroupTitle">Choice</label>
                  <div className="d-flex FormCardBodyGroupInput rounded">
                      <select
                      className="form-select border-0"
                      value={choice}
                      onInput={(e) => setChoice(e.target.value)}
                      >
                        <option value="boolean">Boolean</option>
                        <option value="choices">Choices</option>
                        <option value="email">Email</option>
                        <option value="integer">Integer</option>
                        <option value="phone_number">Phone Number</option>
                        <option value="string">String</option>
                      </select>
                  </div>
                  </div>
              </div>
              <div className="col-3">
                  <div className="FormCardBodyGroup">
                  <label htmlFor="helpText" className="form-label FormCardBodyGroupTitle">Help Text</label>
                  <div className="d-flex FormCardBodyGroupInput rounded">
                      <input
                      type="text"
                      className="form-control border-0"
                      id="helpText"
                      value={helpText}
                      onInput={(e) => setHelpText(e.target.value)}
                      />
                  </div>
                  </div>
              </div>
          </div>
          <button className="btn btn-primary FormCardBodyGroupButton" type="submit">Add</button>
      </div>
    </form>
  )
}

export default LeadAttrForm;