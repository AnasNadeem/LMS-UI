import { useEffect, useState } from "react";
import { createLead } from "../api";

const LeadForm = (props) => {
    const [leadAttrData, setLeadAttrData] = useState({});
    const [leadFormData, setleadFormData] = useState({});
    const [originalAttrData, setOriginalAttrData] = useState({});
    const [errorMsg, setErrorMsg] = useState('');

    const fetchLeadAttr = () => {
        const leadattribute = JSON.parse(localStorage.getItem('leadattribute'));
        let leadAttrObj = {}
        let leadFullAttrObj = {}
        leadattribute.forEach((value, index) => {
            if(value.attribute_type === 'boolean'){
                leadAttrObj[value.slug] = false;
            } else if (value.attribute_type === 'string'){
                leadAttrObj[value.slug] = '';
            }else{
                leadAttrObj[value.slug] = null;
            }
            leadFullAttrObj[value.slug] = value;
        });
        setLeadAttrData(leadFullAttrObj);
        setOriginalAttrData(leadAttrObj);
        setleadFormData(leadAttrObj);
    }
    
    useEffect(() => {
        fetchLeadAttr();
    }, [])

    const handleLead = async (e) => {
        e.preventDefault();
        const account = JSON.parse(localStorage.getItem('account'));
        const data = {main:{}, track:{}, post:{}}
        Object.entries(leadFormData).forEach(entry => {
            const [key, value] = entry;
            data[leadAttrData[key].lead_type][key] = value;
        });
        const leadData = {
            "account": account.id,
            "data": data
        }

        try{
            const resp = await createLead(leadData);
            props.postLeadCreation(resp.data);
          } catch(err){
            let errorMsg = '';
            for (const [key, value] of Object.entries(err.response.data)) {
              errorMsg += `${key.toUpperCase()}: ${value}`;
            }
            setErrorMsg(errorMsg);
            return;
          }
        setleadFormData(originalAttrData);
    }

    return (
        <form onSubmit={handleLead}>
            <div className="card card-body mt-2">
                {errorMsg &&
                <div className="alert alert-danger" role="alert">
                    {errorMsg}
                </div>
                }
                <div className="leadFormCard">
                    {Object.values(leadAttrData).map((leadAttr) => (
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
            <button className="btn btn-primary FormCardBodyGroupButton" type="submit">Add</button>
          </div>
        </form>
    )
}

export default LeadForm