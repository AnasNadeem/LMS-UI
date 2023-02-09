import { useEffect, useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import LeadForm from "../components/LeadForm";
import LeadEditForm from "../components/LeadEditForm";
import { getLead, deleteLead, uploadCSVApi } from "../api";
import LeadFilterForm from "./LeadFilterForm";

const Lead = () => {
  const [leadData, setLeadData] = useState([]);
  const [isEditOn, setIsEditOn] = useState(false);
  const [editLead, setEditLead] = useState({});
  const [editLeadIndex, setEditLeadIndex] = useState();
  const [editLeadFormData, setEditleadFormData] = useState({});
  // Upload CSV
  // const [file, setFile] = useState(null);
  const uploadCsvRef = useRef(null);

  const leadattribute = JSON.parse(localStorage.getItem('leadattribute'));
  const constants = JSON.parse(localStorage.getItem('constants'));
  const filterCombo = constants.ATTR_OP_COMBO;

  let leadFullAttrObj = {};
  leadattribute.forEach((value, index) => {
      leadFullAttrObj[value.slug] = value;
  });

  const fetchLead = async () => {
    const resp = await getLead();
    setLeadData(resp.data);
  }

  useEffect(() => {
      fetchLead();
  }, [])

  const postLeadCreation = (data) => {
    setLeadData([...leadData, data])
  }

  const postLeadUpdate = (index, data) => {
    leadData.splice(index, 1, data);
    setLeadData([...leadData])
  }

  const editLeadHandler = async (lead, leadIndex) => {
    document.getElementById('createLeadForm').classList.add('show');
    let leadAttrObj = {};
    const leadData = lead.data;
    Object.values(leadData).forEach(value => {
        leadAttrObj = {...leadAttrObj, ...value};
    });
    setEditleadFormData(leadAttrObj);
    setIsEditOn(true);
    setEditLead(lead);
    setEditLeadIndex(leadIndex)
  }

  const deleteLeadHandler = async (id, leadIndex) => {
    try{
      await deleteLead(id);
    } catch(err){
      let errorMsg = '';
      for (const [key, value] of Object.entries(err.response.data)) {
        errorMsg += `${key.toUpperCase()}: ${value}`;
      }
      console.log('Error in deleting leadattr' + errorMsg)
      return;
    }
    leadData.splice(leadIndex, 1);
    setLeadData([...leadData])
  }

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    }
    const files = e.target.files;
    // setFile(files[0]);
    uploadCSV(files[0]);
  };

  const uploadCSV = async (file) => {
    if (!file) {
      console.log('No file selected');
      return;
    }
    const uploadData = {
      "file": file,
    }
    try{
      await uploadCSVApi(uploadData);
      fetchLead();
    }catch(err){
      console.log('Error in uploading leads', err);
      return;
    }
  }
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10">
                <div className="main">
                    <div className="container-fluid">
                      <h2 className="mainTitle">
                        Lead
                      </h2>
                      <div className="topBtn">
                        <div className="topBtnRightSide">
                          <button className="btn createBtn" data-bs-toggle="collapse" data-bs-target="#createLeadForm" aria-expanded="false" aria-controls="createLeadForm">
                            Create New
                          </button>
                            <input type="file" ref={uploadCsvRef} accept="text/csv" onChange={handleFileChange} style={{display:"none"}} />
                            <i className="fa-solid fa-file-arrow-up downloadCSV" title="Upload Leads via CSV" onClick={() => uploadCsvRef.current?.click()}></i>
                        </div>
                        <button
                          className="btn createBtn"
                          data-bs-toggle="collapse"
                          data-bs-target="#filterForm"
                          aria-expanded="false"
                          aria-controls="filterForm">
                            Filters
                        </button>
                      </div>

                      <div className="collapse" id="filterForm">
                        <LeadFilterForm leadattribute={leadattribute} filterCombo={filterCombo} leadFullAttrObj={leadFullAttrObj}/>
                      </div>

                      <div className="collapse" id="createLeadForm">
                        {isEditOn ?
                        <LeadEditForm
                        leadattribute={leadattribute}
                        editLeadFormData={editLeadFormData}
                        lead={editLead}
                        editLeadIndex={editLeadIndex}
                        postLeadUpdate={postLeadUpdate}/>
                        : <LeadForm postLeadCreation={postLeadCreation}/>}
                      </div>

                    {leadattribute.length>0 ?  
                      <table className="table table-responsive-md table-responsive-sm ">
                          <thead>
                            <tr>
                            {leadattribute.map((leadAttr) => (
                              <th key={leadAttr.slug} scope="col">{leadAttr.name}</th>
                            ))}
                            </tr>
                          </thead>
                          <tbody>
                          {leadData.map((lead, leadIndex) => (
                            <tr key={lead.id}>
                              {
                                leadattribute.map((attr, index) => (
                                  <td key={index}>{lead.data[attr.lead_type][attr.slug]}</td>
                                ))
                              }
                              <td>
                                  <i className="fas fa-edit" onClick={() => editLeadHandler(lead, leadIndex)}></i>{' '}
                                  <i className="fa-solid fa-trash trashIcon" onClick={() => deleteLeadHandler(lead.id, leadIndex)}></i>
                              </td>
                            </tr>
                            ))}
                            {/* <LeadTable /> */}
                          </tbody>
                      </table>
                    :  <h3>No Leads. Please define your structure first.</h3>}

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lead