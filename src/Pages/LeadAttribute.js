import LeadAttrForm from "../components/LeadAttrForm";
import LeadAttrTable from "../components/LeadAttrTable";
import Sidebar from "../components/Sidebar";

const LeadAttribute = () => {
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
                      <LeadAttrForm />
                      </div>

                      <LeadAttrTable />

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeadAttribute;