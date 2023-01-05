import { useEffect, useState } from "react";
import { getLeadAttr } from "../api";

const LeadAttrTable = () => {
    const [leadAttrData, setLeadAttrData] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const fetchLeadAttr = async () => {
        try{
            const resp = await getLeadAttr();
            setLeadAttrData(resp.data)
          } catch(err){
            let errorMsg = '';
            for (const [key, value] of Object.entries(err.response.data)) {
              errorMsg += `${key.toUpperCase()}: ${value}`;
            }
            setErrorMsg(errorMsg);
            return;
          }
    }

    useEffect(() => {
        fetchLeadAttr();
    }, [])
    
   

  return (
    <table className="table table-responsive-md table-responsive-sm ">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Slug</th>
                <th scope="col">Attribute</th>
                <th scope="col">Type</th>
                <th scope="col">Value</th>
                <th scope="col">Help Text</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
        {leadAttrData &&
            leadAttrData.map((leadattr) => (
            <tr key={leadattr.id}>
                <td>{leadattr.name}</td>
                <td>{leadattr.slug}</td>
                <td>{leadattr.attribute_type}</td>
                <td>{leadattr.lead_type}</td>
                <td>-</td>
                <td className="helpText">{leadattr.help_text}</td>
                <td>
                    <i className="fas fa-edit"></i>
                    <i className="fa-solid fa-trash"></i>
                </td>
            </tr>
            ))
        }
        </tbody>

        {errorMsg &&
          <div className="FormCardBodyGroup alert alert-danger" role="alert">
              {errorMsg}
          </div>
          }
    </table>
  )
}

export default LeadAttrTable;