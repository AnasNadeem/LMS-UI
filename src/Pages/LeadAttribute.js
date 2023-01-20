import { useEffect, useState } from "react";
import { getLeadAttr } from "../api";
import LeadAttrForm from "../components/LeadAttrForm";
import LeadAttrTable from "../components/LeadAttrTable";
import Sidebar from "../components/Sidebar";

const LeadAttribute = () => {
  const [leadAttrData, setLeadAttrData] = useState([]);

  const fetchLeadAttr = async () => {
    const resp = await getLeadAttr();
    setLeadAttrData(resp.data);
    localStorage.setItem('leadattribute', JSON.stringify(resp.data));
  }

  useEffect(() => {
      fetchLeadAttr();
  }, [])

  const postCreation = (data) => {
    const updatedAttrData = [...leadAttrData, data]
    setLeadAttrData(() => updatedAttrData)
    localStorage.setItem('leadattribute', JSON.stringify(updatedAttrData));
  }

  const postDeletion = (index) => {
    leadAttrData.splice(index, 1);
    setLeadAttrData([...leadAttrData])
    localStorage.setItem('leadattribute', JSON.stringify(leadAttrData));
  }

  const postUpdate = (index, data) => {
    leadAttrData.splice(index, 1, data);
    setLeadAttrData([...leadAttrData])
    localStorage.setItem('leadattribute', JSON.stringify(leadAttrData));
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
                        Lead Structure
                      </h2>
                      <div className="topBtn">
                        <button className="btn createBtn" data-bs-toggle="collapse" data-bs-target="#createLeadStructure" aria-expanded="false" aria-controls="createLeadStructure">
                          Create New
                        </button>
                        <input type="text" placeholder="Search" />
                      </div>

                      <div className="collapse" id="createLeadStructure">
                        <LeadAttrForm postCreation={postCreation}/>
                      </div>

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
                        leadAttrData.map((leadattr, index) => 
                          (<LeadAttrTable
                            key={leadattr.id}
                            index={index}
                            postDeletion={postDeletion}
                            postUpdate={postUpdate}
                            leadattr={leadattr}/>
                          ))
                      }
                      </tbody>
                    </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeadAttribute;