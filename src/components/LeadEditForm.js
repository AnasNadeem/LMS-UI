import { useState } from "react";
import { updateLead } from "../api";

const LeadEditForm = ({leadattribute, editLeadFormData, lead, editLeadIndex, postLeadUpdate}) => {
    const [leadFormData, setleadFormData] = useState(editLeadFormData);
    const [errorMsg, setErrorMsg] = useState('');

    const handleEditLead = async (e) => {
        e.preventDefault();
        const data = {main:{}, track:{}, post:{}}
        const leadData = lead.data;
        Object.keys(leadData.main).forEach(key => {
            data.main[key] = leadFormData[key];
        });
        Object.keys(leadData.track).forEach(key => {
            data.track[key] = leadFormData[key];
        });
        Object.keys(leadData.post).forEach(key => {
            data.post[key] = leadFormData[key];
        });
        const updatedLead = lead;
        updatedLead.data = data;

        try{
            const resp = await updateLead(lead.id, updatedLead);
            postLeadUpdate(editLeadIndex, resp.data);
          } catch(err){
            let errorMsg = '';
            for (const [key, value] of Object.entries(err.response.data)) {
              errorMsg += `${key.toUpperCase()}: ${value}`;
            }
            setErrorMsg(errorMsg);
            return;
          }
        // setleadFormData(originalAttrData);
    }

    return (
        <form onSubmit={handleEditLead}>
            <div className="card card-body mt-2">
                {errorMsg &&
                <div className="alert alert-danger" role="alert">
                    {errorMsg}
                </div>
                }
                <div className="leadFormCard">
                    {Object.values(leadattribute).map((leadAttr) => (
                        <div className="FormCardBodyGroup" key={leadAttr.slug}>
                            <label 
                            htmlFor={leadAttr.slug}
                            className="form-label FormCardBodyGroupTitle">
                                {leadAttr.name}
                            </label>
                            <div className="d-flex FormCardBodyGroupInput rounded">
                                <input
                                className="form-control border-0"
                                placeholder={leadAttr.name}
                                id={leadAttr.slug}
                                value={leadFormData[leadAttr.slug] === null ? '' : leadFormData[leadAttr.slug]}
                                onInput={(e) => {
                                    const formValueData = {...leadFormData}
                                    formValueData[leadAttr.slug] = e.target.value;
                                    setleadFormData(formValueData);
                                }}
                                type="text" />
                            </div>
                        </div>
                    ))}
                </div>
            <button className="btn btn-primary FormCardBodyGroupButton" type="submit">Edit</button>
          </div>
        </form>
    )
}

export default LeadEditForm;