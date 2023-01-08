import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import LeadForm from "../components/LeadForm";
import { getLead } from "../api";

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


  // const a = () => {
  //   leadData.map((lead) => {
  //     const data = lead.data;
  //     leadattribute.forEach(attr => {
  //       console.log(data[attr.lead_type][attr.slug])
  //     });
  //     return data;
  //   })
  // }
  // a();

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
                        <LeadForm />
                      </div>

                      <table className="table table-responsive-md table-responsive-sm ">
                          <thead>
                            <tr>
                            {leadattribute.map((leadAttr) => (
                              <th key={leadAttr.slug} scope="col">{leadAttr.name}</th>
                            ))}
                            </tr>
                          </thead>
                          <tbody>
                          {leadData.map((lead) => {
                            return(
                              <tr key={lead.id}>
                                {
                                  leadattribute.map((attr) => (
                                    <td>{lead.data[attr.lead_type][attr.slug]}</td>
                                  ))
                                }
                              </tr>
                            )
                            })}
                            {/* <LeadTable /> */}
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lead