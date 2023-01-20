import { useState } from "react";
import { updateLeadAttr, deleteLeadAttr } from "../api";

const LeadAttrTable = ({leadattr, index, postDeletion, postUpdate}) => {
  const [isEditOn, setIsEditOn] = useState(false);

  const [name, setName] = useState(leadattr.name);
  const [type, setType] = useState(leadattr.lead_type);
  // const [choice, setChoice] = useState(leadattr.attribute_type);
  // const [value, setValue] = useState(null);
  const [helpText, setHelpText] = useState(leadattr.help_text);

  const originalLeadAttrData = {
    "account": leadattr.account,
    "name": leadattr.name,
    "lead_type": leadattr.lead_type,
    "attribute_type": leadattr.attribute_type,
    "value": leadattr.value,
    "help_text": leadattr.help_text,
  }
  const account = JSON.parse(localStorage.getItem('account'));

  const deleteLeadAttribute = async () => {
    try{
      await deleteLeadAttr(leadattr.id);
      postDeletion(index);
    } catch(err){
      let errorMsg = '';
      for (const [key, value] of Object.entries(err.response.data)) {
        errorMsg += `${key.toUpperCase()}: ${value}`;
      }
      console.log('Error in deleting leadattr' + errorMsg)
      // setErrorMsg(errorMsg);
      return;
    }
  }

  const editLeadAttr = async () => {
    if (!isEditOn){
      setIsEditOn(!isEditOn);
      return;
    }

    const leadAttrData = {
      "account": account.id,
      "name": name,
      "lead_type": type,
      "attribute_type": leadattr.attribute_type,
      "value": null,
      "help_text": helpText,
    }

    if (JSON.stringify(leadAttrData) === JSON.stringify(originalLeadAttrData)){
      setIsEditOn(!isEditOn);
      return;
    }
    updateLeadAttribute(leadAttrData);
    setIsEditOn(!isEditOn);
  }

  const updateLeadAttribute = async (data) => {
    try{
      const updateResp = await updateLeadAttr(leadattr.id, data);
      postUpdate(index, updateResp.data);
    } catch(err){
      let errorMsg = '';
      for (const [key, value] of Object.entries(err.response.data)) {
        errorMsg += `${key.toUpperCase()}: ${value}`;
      }
      console.log('Error in updating leadattr' + data.slug + errorMsg)
      // setErrorMsg(errorMsg);
      return;
    }
  }

  return (
      <tr key={leadattr.id}>
          <td>
            {isEditOn ?
              <input 
              type="text"
              className="form-control"
              defaultValue={leadattr.name}
              onInput={(e) => setName(e.target.value)} />
              : leadattr.name
            }
          </td>
          <td>{leadattr.slug}</td>
          <td>
            {leadattr.attribute_type}
          </td>
          <td>
          {isEditOn ?
            <select
            className="form-select"
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
            >
              <option value="main">Main</option>
              <option value="track">Track</option>
              <option value="post">Post</option>
            </select>
            : leadattr.lead_type  
          }
          </td>
          <td>-</td>
          <td className="helpText">
            {isEditOn ?
              <input 
              type="text"
              className="form-control"
              defaultValue={leadattr.help_text}
              onInput={(e) => setHelpText(e.target.value)} />
            : leadattr.help_text
            }
          </td>
          <td>
            {isEditOn ? 
              <i className="fas fa-save" onClick={editLeadAttr}></i>
              : <i className="fas fa-edit" onClick={editLeadAttr}></i>    
            } {' '}
              <i className="fa-solid fa-trash trashIcon" onClick={deleteLeadAttribute}></i>
          </td>
      </tr>
  )
}

export default LeadAttrTable;