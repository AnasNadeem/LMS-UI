import { useEffect, useState } from "react";
import { getLeadAttr } from "../api";

const LeadForm = () => {
    const [leadAttrData, setLeadAttrData] = useState([]);
    const [leadFormData, setleadFormData] = useState({});

    const fetchLeadAttr = async () => {
        const resp = await getLeadAttr();
        setLeadAttrData(resp.data)
        let leadAttrObj = {}
        resp.data.forEach((value, index) => {
            leadAttrObj[value.slug] = ''
        });
        setleadFormData(leadAttrObj);
    }
    
    useEffect(() => {
        fetchLeadAttr();
    }, [])

    const handleLead = async (e) => {
        e.preventDefault();
        const leadData = {main:{}, track:{}, lead:{}}
        for (const [key, value] of Object.entries(leadData)) {
            console.log(key, value)
        }
        console.log(leadFormData)
    }

    return (
        <form onSubmit={handleLead}>
            {leadAttrData.map((leadAttr, index) => (
                <input
                key={index}
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