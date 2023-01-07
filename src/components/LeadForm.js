import { useEffect, useState } from "react";
import { createLead, getLeadAttr } from "../api";

const LeadForm = () => {
    const [leadAttrData, setLeadAttrData] = useState({});
    const [leadFormData, setleadFormData] = useState({});

    const [errorMsg, setErrorMsg] = useState('');

    const fetchLeadAttr = async () => {
        const resp = await getLeadAttr();
        let leadAttrObj = {}
        let leadFullAttrObj = {}
        resp.data.forEach((value, index) => {
            if(value.attribute_type === 'boolean'){
                leadAttrObj[value.slug] = false;
            } else if (value.attribute_type === 'string'){
                leadAttrObj[value.slug] = '';
            }else{
                leadAttrObj[value.slug] = null;
            }
            leadFullAttrObj[value.slug] = value;
        });
        setLeadAttrData(leadFullAttrObj)
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
            console.log(resp.data);
          } catch(err){
            let errorMsg = '';
            for (const [key, value] of Object.entries(err.response.data)) {
              errorMsg += `${key.toUpperCase()}: ${value}`;
            }
            console.log(errorMsg);
            setErrorMsg(errorMsg);
            return;
          }

    }

    return (
        <form onSubmit={handleLead}>
            {Object.values(leadAttrData).map((leadAttr) => (
                <input
                key={leadAttr.slug}
                placeholder={leadAttr.name}
                id={leadAttr.slug}
                onInput={(e) => {
                    const formValueData = {...leadFormData}
                    formValueData[leadAttr.slug] = e.target.value;
                    setleadFormData(formValueData);
                }}
                type="text" />
            ))}
          <button className="btn btn-primary FormCardBodyGroupButton" type="submit">Add</button>

        </form>
    )
}

export default LeadForm