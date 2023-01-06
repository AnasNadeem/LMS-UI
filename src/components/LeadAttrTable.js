import { deleteLeadAttr } from "../api";

const LeadAttrTable = ({postDeletion, leadattr, index}) => {
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

  return (
      <tr key={leadattr.id}>
          <td>{leadattr.name}</td>
          <td>{leadattr.slug}</td>
          <td>{leadattr.attribute_type}</td>
          <td>{leadattr.lead_type}</td>
          <td>-</td>
          <td className="helpText">{leadattr.help_text}</td>
          <td>
              <i className="fas fa-edit"></i>{' '}
              <i className="fa-solid fa-trash trashIcon" onClick={deleteLeadAttribute}></i>
          </td>
      </tr>
  )
}

export default LeadAttrTable;