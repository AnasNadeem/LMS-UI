import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import LeadForm from "../components/LeadForm";
import { getLead, deleteLead } from "../api";

const Lead = () => {
  const [leadData, setLeadData] = useState([]);

  const leadattribute = JSON.parse(localStorage.getItem('leadattribute'));

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
                      <button className="btn createBtn" data-bs-toggle="collapse" data-bs-target="#createLeadForm" aria-expanded="false" aria-controls="createLeadForm">
                          Create New
                        </button>
                        <button className="btn createBtn">
                            Filters
                        </button>
                      </div>

                      <div className="collapse" id="createLeadForm">
                        <LeadForm postLeadCreation={postLeadCreation}/>
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
                                  <i className="fas fa-edit"></i>{' '}
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