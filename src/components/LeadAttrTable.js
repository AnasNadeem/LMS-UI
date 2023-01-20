import { useState } from "react";
import { deleteLeadAttr } from "../api";

const LeadAttrTable = ({postDeletion, leadattr, index}) => {
  const [isEditOn, setIsEditOn] = useState(false);

  const [name, setName] = useState(leadattr.name);
  const [type, setType] = useState(leadattr.lead_type);
  const [choice, setChoice] = useState(leadattr.attribute_type);
  // const [value, setValue] = useState(null);
  const [helpText, setHelpText] = useState(leadattr.help_text);

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

    const account = JSON.parse(localStorage.getItem('account'));
    const leadAttrData = {
      "account": account.id,
      "name": name,
      "lead_type": type,
      "attribute_type": choice,
      "value": null,
      "help_text": helpText,
    }
    const originalLeadAttrData = {
      "account": leadattr.account,
      "name": leadattr.name,
      "lead_type": leadattr.lead_type,
      "attribute_type": leadattr.attribute_type,
      "value": leadattr.value,
      "help_text": leadattr.help_text,
    }
    if (JSON.stringify(leadAttrData) === JSON.stringify(originalLeadAttrData)){
      return;
    }
    setIsEditOn(!isEditOn);
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
          <td>{leadattr.attribute_type}</td>
          <td>{leadattr.lead_type}</td>
          <td>-</td>
          <td className="helpText">{leadattr.help_text}</td>
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