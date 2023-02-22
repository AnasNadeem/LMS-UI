import { useState } from "react";
import { updateMember, deleteMember } from "../api";

const MemberTable = ({member, index, postDeletion, postUpdate}) => {
    const [isEditOn, setIsEditOn] = useState(false);

    const [role, setRole] = useState(member.role);

    const originalLeadAttrData = {
        "account": member.account,
    }
    const account = JSON.parse(localStorage.getItem('account'));

    const deleteLeadAttribute = async () => {
        try{
            await deleteMember(member.id);
            postDeletion(index);
        } catch(err){
            let errorMsg = '';
            for (const [key, value] of Object.entries(err.response.data)) {
            errorMsg += `${key.toUpperCase()}: ${value}`;
            }
            console.log('Error in deleting member' + errorMsg)
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
            "role": role,
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
            const updateResp = await updateMember(member.id, data);
            postUpdate(index, updateResp.data);
        } catch(err){
            let errorMsg = '';
            for (const [key, value] of Object.entries(err.response.data)) {
            errorMsg += `${key.toUpperCase()}: ${value}`;
            }
            console.log('Error in updating member' + data.slug + errorMsg)
            // setErrorMsg(errorMsg);
            return;
        }
    }

  return (
        <tr key={member.id}>
            <td>{member.id}</td>
            <td>{member.user?.email}</td>
            <td>{member.role}</td>
            <td>{member.is_active}</td>
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

export default MemberTable;